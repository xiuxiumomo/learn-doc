# ASP.NET Core Web API 新手入门笔记

> 基于本项目的真实代码整理（`D:\netcore-project\WebAppApi`，.NET 10 / C# / Swashbuckle 11）
> 读者假设：会一点 C#，没系统学过 ASP.NET Core Web API
> 环境：`dotnet build` / `dotnet run`，端口 `http://localhost:5290`

---

## 目录

1. [一个请求的完整旅程](#一一个请求的完整旅程)
2. [Program.cs 逐行解读](#二programcs-逐行解读)
3. [控制器三件套：ControllerBase / ApiController / Route](#三控制器三件套controllerbase--apicontroller--route)
4. [路由怎么写：前缀、相对路径、绝对路径](#四路由怎么写前缀相对路径绝对路径)
5. [接收参数：JSON body 与 DTO](#五接收参数json-body-与-dto)
6. [返回响应：状态码与 Ok/BadRequest](#六返回响应状态码与-okbadrequest)
7. [统一返回格式 ApiResponse](#七统一返回格式-apiresponse)
8. [Swagger：接口文档](#八swagger接口文档)
9. [常见错误排查表](#九常见错误排查表)
10. [术语速查](#十术语速查)

---

## 一、一个请求的完整旅程

先建立整体印象，后面每个零件都会单独讲。

```
前端 axios.post('/api/Test/addUser', { userName:'jack' })
        │
        ▼
┌─────────────────────────────────────────────────────────┐
│ Kestrel（Web 服务器）：监听 5290 端口，接收 TCP 请求      │
├─────────────────────────────────────────────────────────┤
│ 中间件管道（Middleware Pipeline）—— 按顺序一层层剥洋葱    │
│   1. UseHttpsRedirection      http 转 https              │
│   2. UseRouting（.NET6+ 自动插入）  根据 URL 找到路由目标 │
│   3. UseAuthentication       解析 token：你是谁（未配则跳过）│
│   4. UseAuthorization        看 [Authorize]：你能进吗     │
│   5. MapControllers 注册的端点 ← 请求在这里落到具体方法   │
├─────────────────────────────────────────────────────────┤
│ 参数绑定：JSON body → AddUserRequest 对象                 │
│ 执行 TestController.AddUser(...)  ← 你的业务代码          │
│ 返回 IActionResult（如 BadRequestObjectResult）           │
├─────────────────────────────────────────────────────────┤
│ 结果执行：把 IActionResult 翻译成 “HTTP 状态码 + JSON body”│
└─────────────────────────────────────────────────────────┘
        │
        ▼
前端收到 { code:0, message:"新增成功", result:{...} }
```

记住两个词：

- **中间件（Middleware）**：处理方法，`app.UseXxx()` 挂上去，像流水线上的工序，**顺序不能乱**；
- **端点（Endpoint）**：一个“URL + HTTP 方法 → 处理方法”的映射条目，`MapControllers()` 负责把控制器里的路由登记进去。

---

## 二、Program.cs 逐行解读

```csharp
var builder = WebApplication.CreateBuilder(args);   // ① 创建“配置台”
builder.Services.AddControllers();                  // ② 注册控制器服务
builder.Services.AddSwaggerGen();                   // ③ 注册 Swagger 文档生成器

var app = builder.Build();                          // ④ 构建应用（DI 容器定稿）

if (app.Environment.IsDevelopment())                // ⑤ 仅开发环境启用文档
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();                          // ⑥ http → https
app.UseAuthorization();                             // ⑦ 权限检查（未配认证时是“空转”）
app.MapControllers();                               // ⑧ 把控制器路由登记进路由表
app.Run();                                          // ⑨ 启动，开始监听
```

### ① `WebApplication.CreateBuilder(args)` 是什么

返回一个 `WebApplicationBuilder`，可以理解为“**应用启动前的配置台**”。它自动帮你完成这些默认配置：

| 自动做的事       | 说明                                              |
| ---------------- | ------------------------------------------------- |
| 设置 ContentRoot | 当前工作目录，`appsettings.json` 相对它查找       |
| 加载配置文件     | `appsettings.json` + `appsettings.{环境}.json`    |
| 加载环境变量     | 含 `ASPNETCORE_` 前缀                             |
| 加载用户机密     | 开发环境的 `secrets.json`（存密码用，别写进代码） |
| 挂上命令行参数   | 就是传入的 `args`，优先级最高                     |

所以能这样临时覆盖配置：

```bash
dotnet run -- --urls http://localhost:8080
dotnet run -- --environment Production
```

`builder` 上有 5 个常用属性：

```csharp
builder.Services;       // 注册服务（依赖注入）
builder.Configuration;  // 读配置
builder.Logging;        // 配日志
builder.Environment;    // 环境信息 IsDevelopment()
builder.WebHost;        // 服务器配置（端口、请求体大小限制）
```

⚠️ **`builder` 和 `app` 的分工要分清**：

| 阶段              | 你做的事                                      | 类比                   |
| ----------------- | --------------------------------------------- | ---------------------- |
| `builder`（注册） | “我有哪些能力”：数据库、缓存、控制器、Swagger | 装修时先买好家电       |
| `app`（编排）     | “请求怎么流”：中间件顺序、路由映射            | 决定家电放哪、水怎么走 |

### ④ `builder.Build()` 之后

得到 `WebApplication`（已构建好的应用实例），后续所有 `Use…` / `Map…` 都是在它身上编排管道，最后 `Run()` 才真正启动 Kestrel 监听端口。**没有 `Run()`，程序会立即退出。**

### ⑦ `UseAuthorization()` 到底是什么

它**不负责登录**，只负责“**这个人能不能访问这个接口**”：

| 中间件                              | 回答的问题 | 谁提供判断依据              |
| ----------------------------------- | ---------- | --------------------------- |
| `UseAuthentication()`（本项目未配） | 你是谁     | 解析 Cookie / JWT token     |
| `UseAuthorization()`                | 你能进吗   | 接口上的 `[Authorize]` 特性 |

判断流程：

```
匹配到 Endpoint → 读它的授权元数据
   ├─ 没有 [Authorize]        → 放行（匿名可访问）
   ├─ 有 [Authorize] 且已认证 → 校验角色/策略 → 通过 或 403
   └─ 有 [Authorize] 但没认证 → 401
```

本项目既没有 `AddAuthentication()` 也没有 `[Authorize]`，所以它目前是**空转状态**（所有接口匿名放行），模板自带，留着无害。

顺序铁律：

```csharp
app.UseRouting();          // .NET6+ 自动插入，不用手写
app.UseAuthentication();   // 先认人
app.UseAuthorization();    // 再判权限
app.MapControllers();      // 最后登记端点
```

> 把 `UseAuthorization` 写到 `UseRouting` 之前，`[Authorize]` 会失效——这是最常见的权限“假生效”Bug。

### ⑧ `MapControllers()` 不写会怎样

控制器接口**全部 404**，但 Swagger 页面仍能打开（Swagger 直接读代码生成文档，不走路由表）。

所以典型症状是：**Swagger 里能看到接口，实际一调就 404** → 检查 `MapControllers()` 有没有被注释掉。

它和 `AddControllers()` 是一对：

| 方法               | 作用                                                        |
| ------------------ | ----------------------------------------------------------- |
| `AddControllers()` | 服务注册阶段：扫描程序集找所有控制器类                      |
| `MapControllers()` | 管道阶段：把 Action 上的 `[Route]/[HttpGet]` 翻译成路由条目 |

---

## 三、控制器三件套：ControllerBase / ApiController / Route

```csharp
using Microsoft.AspNetCore.Mvc;

namespace WebAppApi.Controllers
{
    [Route("api/[controller]")]      // ② URL 前缀
    [ApiController]                  // ① API 行为开关
    public class TestController : ControllerBase   // ③ 基类
    {
        [HttpGet("hello")]
        public string Hello() => "hello";
    }
}
```

### ① `[ApiController]` —— 行为开关

| 能力       | 不加                                | 加上之后                                              |
| ---------- | ----------------------------------- | ----------------------------------------------------- |
| 参数从哪取 | 要手写 `[FromBody]` / `[FromQuery]` | 自动推断：复杂对象取 body，简单类型取 query           |
| 参数校验   | 自己写 `if (!ModelState.IsValid)`   | 失败自动返回 400 + `ProblemDetails`                   |
| 错误格式   | 自定义                              | 统一 RFC 7807                                         |
| 路由方式   | 可用约定式路由                      | **强制特性路由**，每个 Action 必须有 `[HttpGet]` 之类 |

### ② `[Route("api/[controller]")]` —— URL 前缀

`[controller]` 是占位符，运行时替换成**去掉 `Controller` 后缀的类名**：

```
[Route("api/[controller]")] + TestController  →  /api/Test
```

| Token          | 替换为              | 例      |
| -------------- | ------------------- | ------- |
| `[controller]` | 类名去掉 Controller | Test    |
| `[action]`     | 方法名              | AddUser |
| `[area]`       | Area 名             | —       |

匹配**不区分大小写**：`/api/test`、`/API/Test` 都能命中。

### ③ `ControllerBase` —— 手里的一堆工具

它提供 `Ok()`、`BadRequest()`、`NotFound()`、`StatusCode()` 等快捷方法（详见第六节）。它还有个兄弟 `Controller`（多了 `View()`，给 MVC 视图项目用），**纯 API 项目继承 `ControllerBase` 就够**。

---

## 四、路由怎么写：前缀、相对路径、绝对路径

控制器上定了前缀 `api/Test` 后，方法上写的路径按规则拼接：

```csharp
[Route("api/[controller]")]                     // 前缀：/api/Test
public class TestController : ControllerBase
{
    [HttpGet]                                   // → GET  /api/Test
    [HttpGet("hello")]                          // → GET  /api/Test/hello
    [HttpGet("/api/v1/ping")]                   // → GET  /api/v1/ping（斜杠开头，覆盖前缀）
    [HttpGet("~/api/v2/ping")]                  // → GET  /api/v2/ping（~ 开头，同上）
    [HttpPost("user")]                          // → POST /api/Test/user
    [HttpPut("user/{id:int}")]                  // → PUT  /api/Test/user/{id}
    [HttpDelete("user/{id:int}")]               // → DELETE
}
```

### 路由约束：`{id:int}`

```csharp
[HttpGet("user/{id:int}")]
public string GetUser(int id) => $"user {id}";
```

| 请求                 | 结果                                     |
| -------------------- | ---------------------------------------- |
| `/api/Test/user/11`  | ✅ 进入方法，`id = 11`                    |
| `/api/Test/user/abc` | ❌ 不匹配任何路由 → 404（连方法都不会进） |

常用约束：`int` / `long` / `bool` / `guid` / `minlength(2)` / `regex(...)`。

### 一个方法挂多条路由

```csharp
[HttpGet("list")]
[HttpGet("all")]
public IEnumerable<string> List() => new[] { "a", "b" };
```

### 三个常见错误

| 错误                            | 后果                                                     |
| ------------------------------- | -------------------------------------------------------- |
| 同一 HTTP 动词 + 同一路径写两次 | 运行时抛 `AmbiguousMatchException`（请求匹配到多个端点） |
| `Name = "xxx"` 重复             | 启动时抛异常；`Name` 全局唯一                            |
| 忘写 `[HttpGet]` 等动词特性     | 该 Action 无法被路由（或报 405 Method Not Allowed）      |

---

## 五、接收参数：JSON body 与 DTO

```csharp
[HttpPost("addUser")]
public IActionResult AddUser([FromBody] AddUserRequest request) { ... }

public class AddUserRequest
{
    public string UserName { get; set; } = string.Empty;
    public string UserPhone { get; set; } = string.Empty;
}
```

请求体：

```json
{ "userName": "jack", "userPhone": "123" }
```

### 要点 1：字段名大小写不敏感

MVC 默认用 `JsonSerializerDefaults.Web`：

```csharp
PropertyNamingPolicy = JsonNamingPolicy.CamelCase;   // 输出 userName（小驼峰）
PropertyNameCaseInsensitive = true;                  // 输入不区分大小写
```

| 请求字段                             | 能否绑定               |
| ------------------------------------ | ---------------------- |
| `userName` / `username` / `USERNAME` | ✅ 仅大小写不同         |
| `user_name` / `user-name`            | ❌ 下划线不算大小写差异 |
| 名字完全不同                         | ❌                      |

### 要点 2：没传的字段是 `""` 还是 `null`

```csharp
public string UserPhone { get; set; } = string.Empty;   // ← 初始化器很关键
```

反序列化两步走：先 new 对象（初始化器生效 → `""`），再把 JSON 里**存在**的属性覆盖上去。

| 请求体                          | `UserPhone`         |
| ------------------------------- | ------------------- |
| `{"userName":"jack"}`（缺字段） | `""`（不是 null！） |
| `"userPhone": null`             | `null`              |
| `"userPhone": ""`               | `""`                |
| `"userPhone": "   "`            | `"   "`             |

所以校验一定要用 `string.IsNullOrWhiteSpace`：

```csharp
if (string.IsNullOrWhiteSpace(request.UserName)) { /* null / "" / 纯空格 都拦得住 */ }
```

| 方法                 | `null` | `""` | `"   "`   | `" jack "` |
| -------------------- | ------ | ---- | --------- | ---------- |
| `IsNullOrEmpty`      | true   | true | **false** | false      |
| `IsNullOrWhiteSpace` | true   | true | **true**  | false      |

### 要点 3：`[FromBody]` 是干什么的

告诉模型绑定器“这个参数从请求体读”。加了 `[ApiController]` 后其实可以省略（复杂类型默认从 body 取），但**显式写出来更清楚**，也方便新人理解。

其他来源标注：

| 特性           | 从哪取      | 例                    |
| -------------- | ----------- | --------------------- |
| `[FromBody]`   | 请求体 JSON | 复杂对象              |
| `[FromRoute]`  | URL 路径    | `{id}`                |
| `[FromQuery]`  | 查询字符串  | `?page=2`             |
| `[FromHeader]` | 请求头      | `X-Token`             |
| `[FromForm]`   | 表单        | `multipart/form-data` |

---

## 六、返回响应：状态码与 Ok/BadRequest

### 理念：状态码表达“结果大类”，body 表达“细节”

| 状态码                    | 含义                 | 什么时候用                   |
| ------------------------- | -------------------- | ---------------------------- |
| 200 OK                    | 成功                 | 查询/新增成功                |
| 201 Created               | 已创建               | 新增资源（带 `Location` 头） |
| 204 No Content            | 成功但无 body        | 删除/更新完成                |
| 400 Bad Request           | **客户端**请求有问题 | 参数校验失败                 |
| 401 Unauthorized          | 没认证               | 未登录 / token 失效          |
| 403 Forbidden             | 已认证但无权限       | 角色不够                     |
| 404 Not Found             | 资源不存在           | 查不到用户                   |
| 409 Conflict              | 冲突                 | 手机号已注册                 |
| 500 Internal Server Error | **服务端**出错       | 代码异常                     |

> 注意 400 和 500 的区别：400 是“**你传错了**”，500 是“**我这边炸了**”。业务校验失败永远用 400。

### 快捷方法一览（都来自 `ControllerBase`）

```csharp
return Ok(data);                                // 200 + 序列化 data
return BadRequest(new { Message = "x" });       // 400 + body
return NotFound(new { Message = "不存在" });     // 404 + body
return NoContent();                             // 204，无 body
return Unauthorized(new { Message = "未登录" });  // 401（不传参则无 body）
return Created("/api/user/1", data);            // 201 + Location 头
return StatusCode(422, data);                   // 任意状态码
```

底层原理：每个方法返回一个 `IActionResult` **实现对象**（`OkObjectResult`、`BadRequestObjectResult`…），框架在管道末尾把它翻译成 HTTP 响应。

### `IActionResult` vs `ActionResult<T>`

```csharp
// 写法 A：只能返回“结果对象”，Swagger 不知道 body 模型
public IActionResult GetUser(int id) => Ok(new UserDto { ... });

// 写法 B：既能直接 return 数据，也能 return 错误结果，且 Swagger 能识别模型
public ActionResult<UserDto> GetUser(int id)
{
    if (id <= 0) return NotFound();       // 返回 IActionResult ✅
    return new UserDto { Id = id };       // 直接返回数据 = Ok(dto) ✅
}
```

| 返回类型          | `return Ok(x)` | `return NotFound()` | 直接 `return x` | Swagger 识别模型 |
| ----------------- | -------------- | ------------------- | --------------- | ---------------- |
| `IActionResult`   | ✅              | ✅                   | ❌               | ❌                |
| `ActionResult<T>` | ✅              | ✅                   | ✅               | ✅                |
| `string` / `T`    | ❌              | ❌                   | ✅（固定 200）   | ✅                |

### 一个坑：`Ok(string)` 输出的是纯文本

```csharp
return Ok("hello");    // Content-Type: text/plain，body 是 hello（不带引号）
```

前端 `JSON.parse` 会报错。需要 JSON 就包成对象：`Ok(new { msg = "hello" })`。

---

## 七、统一返回格式 ApiResponse

真实项目几乎不会让每个接口随便返回——前端需要一套固定结构：

```json
{ "code": 0, "message": "success", "result": {...}, "timestamp": 1763455000000, "success": true }
```

### 定义在哪

放在**公共层目录**，和控制器同级但独立：

```
WebAppApi/
├── Common/
│   └── ApiResponse.cs      ← 统一结构 + 状态码常量
├── Controllers/
├── Models/                 ← 业务 DTO（可选，看团队习惯）
└── Program.cs
```

### 结构长什么样（`Common/ApiResponse.cs` 核心）

```csharp
public static class BizCode            // 业务码常量，避免乱写魔数
{
    public const int Success = 0;      // 0 = 成功
    public const int Fail = -1;
    public const int ParamInvalid = 40000;
    public const int Unauthorized = 40100;
    public const int Forbidden = 40300;
    public const int NotFound = 40400;
    public const int ServerError = 50000;
}

public class ApiResponse<T>            // 带数据的版本
{
    public int Code { get; set; } = BizCode.Success;
    public string Message { get; set; } = "success";
    public T? Result { get; set; }
    public long Timestamp { get; set; } = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();

    public static ApiResponse<T> Ok(T result, string message = "success") => ...;
    public static ApiResponse<T> Fail(int code, string message) => ...;
}
```

### 怎么用

**方式 A：HTTP 恒 200，前端只看 `code`**（国内项目最常见）

```csharp
[HttpPost("addUser")]
public ApiResponse<AddUserRequest> AddUser([FromBody] AddUserRequest request)
{
    if (string.IsNullOrWhiteSpace(request.UserName))
        return ApiResponse<AddUserRequest>.Fail(BizCode.ParamInvalid, "userName 不能为空");

    return ApiResponse<AddUserRequest>.Ok(request, "新增成功");
}
```

**方式 B：保留 HTTP 语义 + body 统一**（本项目采用）

```csharp
[HttpPost("addUser")]
public IActionResult AddUser([FromBody] AddUserRequest request)
{
    if (string.IsNullOrWhiteSpace(request.UserName))
        return BadRequest(ApiResponse<AddUserRequest>.Fail(BizCode.ParamInvalid, "userName 不能为空"));

    return Ok(ApiResponse<AddUserRequest>.Ok(request, "新增成功"));
}
```

| 方式                    | 优点                                 | 缺点                                 |
| ----------------------- | ------------------------------------ | ------------------------------------ |
| A（恒 200）             | 前端只有一条解析路径，最简单         | 网关/监控看不到失败率，HTTP 语义丢失 |
| B（状态码 + 统一 body） | 两层语义都在，可被网关/缓存/鉴权利用 | 前端要同时处理 HTTP 层和业务码层     |

### 为什么会有两个同名类型

```csharp
public class ApiResponse<T> { ... }        // 泛型：带数据
public static class ApiResponse { ... }    // 非泛型、static：只放工厂方法（不能 new、不会被序列化）
```

C# 里**类型标识 = 名字 + 类型参数个数**，所以同名共存合法（`Task` / `Task<T>` 也是这个套路）。第二个不是“另一个响应类型”，而是**便捷入口**：`ApiResponse.Ok("新增成功")` 避免了写 `ApiResponse<object?>.Ok(null, ...)`。

前端感知不到两者的区别——**序列化出来的 JSON 完全一样**，所以只需要一份 TS 类型：

```ts
interface ApiResponse<T = unknown> {
  code: number;
  message: string;
  result: T | null;
  timestamp: number;
  success: boolean;
}
```

### `object?` 是什么

`object` 是 C# 内置的根类型 `System.Object`（所有类型的最终父类），`?` 是可空标记。`ApiResponse<object?>` 的意思只是“**T 填 object**，`Result` 可以是 null”——用于“没有业务数据”的接口。

代价：丢类型信息、Swagger 描述弱。想规避可以给无数据场景定义专用空类型（`public record EmptyResult;`）。

---

## 八、Swagger：接口文档

启动后访问 `http://localhost:5290/swagger`，可直接在页面里 Try it out。

### `[ProducesResponseType]` 是文档元数据，**不影响运行**

```csharp
[ProducesResponseType(typeof(ApiResponse<AddUserRequest>), StatusCodes.Status200OK)]
[ProducesResponseType(typeof(ApiResponse<AddUserRequest>), StatusCodes.Status400BadRequest)]
```

| 参数                      | 作用                           |
| ------------------------- | ------------------------------ |
| `StatusCodes.Status200OK` | 声明“可能返回 200”（常量 200） |
| `typeof(...)`             | 声明“200 时的 body 模型”       |

去掉它们：接口照样工作，只是文档里 200 的 schema 变成空的 `{}`、400 不显示。

**更省事的替代做法**：用 `ActionResult<ApiResponse<T>>` 作为返回类型，Swagger 自动推导 200 的模型，只对额外的状态码补一行。

```csharp
public ActionResult<ApiResponse<AddUserRequest>> AddUser(...)
```

### 常见困惑

| 疑问                             | 回答                                                          |
| -------------------------------- | ------------------------------------------------------------- |
| 为什么发布后看不到 Swagger？     | 模板只在 `IsDevelopment()` 里启用，这是默认行为，不是路由失效 |
| 为什么文档里 `result` 没有字段？ | 用了 `object` / 匿名类型，Swagger 猜不出来；改用具体 DTO      |

---

## 九、常见错误排查表

| 现象                                             | 最可能的原因                                           | 处理                                                                |
| ------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------------------- |
| 所有接口 404，但 Swagger 正常                    | `app.MapControllers()` 被注释/漏写                     | 恢复该行并重启                                                      |
| 某个接口 404                                     | 路由前缀/路径拼错；`{id:int}` 约束不匹配（传了 `abc`） | 看 Swagger 里的实际路径                                             |
| 405 Method Not Allowed                           | 用 POST 调了 GET 接口                                  | 检查 `[HttpGet]` / `[HttpPost]`                                     |
| 启动报 `AmbiguousMatchException`                 | 同一动词+同一路径写了两遍                              | 给它们不同路径                                                      |
| 启动报 `Name` 重复                               | `[HttpGet(Name="xxx")]` 重名                           | 保证全局唯一                                                        |
| 参数永远是 null                                  | 没写 `[FromBody]` 且没加 `[ApiController]`             | 补上特性                                                            |
| 收到 400 但结构不是 `ApiResponse`                | `[ApiController]` 自动校验返回了 `ProblemDetails`      | 配 `InvalidModelStateResponseFactory`，或改用 `[Required]` + 自定义 |
| 401 且报 `No authenticationScheme was specified` | 加了 `[Authorize]` 但没配认证                          | 加 `AddAuthentication()`                                            |
| `dotnet build` 报 exe 被占用                     | 应用还在运行，锁住了 `bin\WebAppApi.exe`               | 先停掉再编译                                                        |
| 返回 500 且没细节                                | 未捕获异常                                             | 看控制台日志，或加异常中间件                                        |

---

## 十、术语速查

| 术语                  | 一句话解释                                            |
| --------------------- | ----------------------------------------------------- |
| **Kestrel**           | ASP.NET Core 内置的跨平台 Web 服务器                  |
| **中间件**            | 请求管道上的一道工序，`app.UseXxx()`                  |
| **Endpoint（端点）**  | “URL + 动词 → 处理函数”的映射条目                     |
| **路由约束**          | `{id:int}` 这类“参数必须满足的格式”                   |
| **模型绑定**          | 把请求数据自动填进方法参数的过程                      |
| **DTO**               | 数据传输对象，专门给接口用的类（如 `AddUserRequest`） |
| **DI（依赖注入）**    | 对象不自己 `new`，由容器按需注入                      |
| **DI 容器**           | `builder.Services` 里登记，`Build()` 后定稿           |
| **`IActionResult`**   | “响应结果”的抽象，框架最后翻译成 HTTP                 |
| **特性（Attribute）** | 方括号里的标注，如 `[HttpGet]`，本质是元数据          |
| **匿名类型**          | `new { a = 1 }`，编译器现场生成的无名类               |
| **`[ApiController]`** | 开启 API 模式：自动绑定、自动 400、强制特性路由       |
| **Swagger/OpenAPI**   | 根据代码自动生成的接口文档                            |

---

## 附：学习路径建议（给新手）

1. **先跑通**：`dotnet run` → Swagger 里调 `GET /api/Test/hello`，确认“URL 能打到方法”。
2. **再改路由**：自己加一个 `GET /api/Test/version` 返回版本号，体会前缀拼接规则。
3. **收参数**：加一个 `POST` 接口，用 DTO 收 `{userName, userPhone}`，试三种情况（缺字段 / null / 空格），观察 400。
4. **统一返回**：把接口改成返回 `ApiResponse<T>`，用 Postman/Swagger 对比结构。
5. **接数据库**：EF Core + SQLite，把 `addUser` 真正写库。
6. **加认证**：JWT + `[Authorize]` + Swagger 授权按钮。
7. **做全局处理**：异常中间件 + `InvalidModelStateResponseFactory`，让所有错误都是统一结构。

> 每一步都只改一个小点、立刻用 Swagger 验证——这是学 Web API 最快的方式。


