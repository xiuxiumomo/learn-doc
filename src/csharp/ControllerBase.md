# ControllerBase 响应方法详解

> 适用项目：`D:\netcore-project\WebAppApi\WebAppApi`（ASP.NET Core / `TestController : ControllerBase`）
> 本文所有方法都来自基类 `Microsoft.AspNetCore.Mvc.ControllerBase`，控制器继承它之后可直接调用，无需 `this.`

---

## 一、总览

| 写法                     | 状态码 | 响应体（Body）                 | 典型场景                                 |
| ------------------------ | ------ | ------------------------------ | ---------------------------------------- |
| `Ok(data)`               | 200    | `data` 的 JSON                 | 查询成功                                 |
| `Ok()`                   | 200    | 空                             | 成功但无需返回内容                       |
| `BadRequest(body)`       | 400    | `body` 的 JSON                 | 参数校验失败、业务规则拒绝               |
| `BadRequest()`           | 400    | 空                             | 同上但不需要说明                         |
| `NotFound(body)`         | 404    | `body` 的 JSON                 | 资源（用户/订单）不存在                  |
| `NoContent()`            | 204    | **无**                         | 删除/更新成功，不需要回数据              |
| `Unauthorized(body)`     | 401    | `body` 的 JSON                 | 未登录、token 失效                       |
| `Forbid()`               | 403    | 空                             | 已登录但无权限                           |
| `Created(uri, data)`     | 201    | `data` 的 JSON + `Location` 头 | 新增资源成功                             |
| `StatusCode(code, body)` | 自定义 | `body` 的 JSON                 | 框架没提供快捷方法的码（418、422、503…） |

底层原理：这些方法都是返回一个 `IActionResult` 实现对象（如 `OkObjectResult`、`BadRequestObjectResult`），框架在管道末尾把它翻译成 HTTP 状态码 + 序列化后的 body。

---

## 二、逐个详解

### 1. `Ok(data)` → 200 + JSON

```csharp
[HttpGet("ok")]
public IActionResult Ok200()
{
    return Ok(new
    {
        Success = true,
        Data = new { Id = 1, Name = "jack", Phone = "123" }
    });
}
```

请求：

```http
GET /api/Responses/ok
```

响应：

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"success":true,"data":{"id":1,"name":"jack","phone":"123"}}
```

要点：

- 属性名输出为**小驼峰**（`Success` → `success`），这是 `JsonSerializerDefaults.Web` 的命名策略。
- 返回 `List<T>`、DTO、字符串、数字都可以，`Ok()` 只负责“200 + 序列化”。
- `Ok(null)` 会输出 `Content-Length: 0`，和 `Ok()` 表现接近，但类型上仍是 `OkObjectResult`。

---

### 2. `BadRequest(body)` → 400 + JSON

业务校验失败最常用的写法：

```csharp
[HttpPost("user")]
public IActionResult CreateUser([FromBody] AddUserRequest request)
{
    if (string.IsNullOrWhiteSpace(request.UserName))
        return BadRequest(new { Success = false, Message = "userName 不能为空" });

    if (string.IsNullOrWhiteSpace(request.UserPhone))
        return BadRequest(new { Success = false, Message = "userPhone 不能为空" });

    return Ok(new { Success = true, Data = request });
}
```

请求（缺 `userPhone`）：

```http
POST /api/Responses/user
Content-Type: application/json

{ "userName": "jack" }
```

响应：

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json; charset=utf-8

{"success":false,"message":"userPhone 不能为空"}
```

> 400 语义是「**客户端**请求有问题」，别用来表示“服务器炸了”——那是 500。

---

### 3. `NotFound(body)` → 404

```csharp
[HttpGet("user/{id:int}")]
public IActionResult GetUser(int id)
{
    // 模拟查库：只有 id > 0 才算存在
    if (id <= 0)
        return NotFound(new { Success = false, Message = $"id={id} 的用户不存在" });

    return Ok(new { Success = true, Data = new { Id = id, Name = "jack" } });
}
```

```http
GET /api/Responses/user/-1

HTTP/1.1 404 Not Found

{"success":false,"message":"id=-1 的用户不存在"}
```

要点：

- 路由里的 `{id:int}` 是**路由约束**：`/user/abc` 根本不会进这个方法，直接 404（且不带 body）。
- 资源不存在时返回 404 比返回 `200 + {success:false}` 更符合 REST 语义。

---

### 4. `NoContent()` → 204，无 body

```csharp
[HttpDelete("user/{id:int}")]
public IActionResult DeleteUser(int id)
{
    // 删除逻辑……
    return NoContent();
}
```

```http
DELETE /api/Responses/user/5

HTTP/1.1 204 No Content
（无响应体，Content-Length: 0）
```

要点：

- 204 **规范上不允许带 body**，前端拿到的 `response.data` 会是空。
- 常见于 DELETE、PUT/PATCH（内容已确认保存成功、无需回读）。
- 如果前端需要“删除成功”的提示，两种选择：前端自己按 204 判断成功，或者改用 `Ok(new { Success = true })`。

---

### 5. `StatusCode(code, body)` → 任意状态码

```csharp
[HttpGet("teapot")]
public IActionResult Teapot()
{
    return StatusCode(StatusCodes.Status418ImATeapot, new
    {
        Success = false,
        Message = "I'm a teapot",
        Code = 418
    });
}
```

```http
GET /api/Responses/teapot

HTTP/1.1 418 I'm a teapot

{"success":false,"message":"I'm a teapot","code":418}
```

也可把码做成参数，方便调试：

```csharp
[HttpGet("status/{code:int}")]
public IActionResult AnyStatus(int code)
{
    return StatusCode(code, new { Success = code < 400, Code = code });
}
```

常用非常规码：

| 码  | 常量                           | 语义                             |
| --- | ------------------------------ | -------------------------------- |
| 201 | `Status201Created`             | 已用 `Created()`，一般不用自己写 |
| 202 | `Status202Accepted`            | 已受理，异步处理中               |
| 204 | `Status204NoContent`           | 已用 `NoContent()`               |
| 403 | `Status403Forbidden`           | 已登录但无权限                   |
| 409 | `Status409Conflict`            | 唯一键冲突（手机号已注册）       |
| 422 | `Status422UnprocessableEntity` | 语法正确但语义/校验不通过        |
| 429 | `Status429TooManyRequests`     | 限流                             |
| 503 | `Status503ServiceUnavailable`  | 依赖服务不可用                   |

---

### 6. `Unauthorized()` / `Unauthorized(body)` → 401

```csharp
[HttpGet("admin")]
public IActionResult Admin()
{
    var isAdmin = false;                       // 实际项目里查 token / 当前用户
    if (!isAdmin)
        return Unauthorized(new { Success = false, Message = "未登录或没有管理员权限" });

    return Ok(new { Success = true, Data = "admin data" });
}
```

- `Unauthorized()` **默认不带 body**，只返回 401。
- 想给前端错误原因就传对象：`Unauthorized(new { Success = false, Message = "..." })`。
- 401 与 403 的区别：**401 = 你没证明身份；403 = 证明了你没资格**。已登录但权限不够应该用 `Forbid()`（403）。

---

### 7. `Created(location, body)` → 201

```csharp
[HttpPost("create")]
public IActionResult CreateSomething([FromBody] AddUserRequest request)
{
    var newId = 1001;
    return Created($"/api/Responses/user/{newId}", new { Success = true, Id = newId });
}
```

```http
HTTP/1.1 201 Created
Location: /api/Responses/user/1001

{"success":true,"id":1001}
```

要点：

- 201 表示“资源已创建”，`Location` 头告诉调用方**去哪儿取这个新资源**。
- 如果创建动作还定义了对应的 GET 方法，可以用 `CreatedAtAction("GetUser", new { id = newId }, data)`，框架自动生成 Location，不用手拼 URL（手拼容易写错前缀）。

---

### 8. `ActionResult<T>`：既能返回数据，也能返回别的状态码

`IActionResult` 的问题是：返回 `Ok(dto)` 时编译器不知道 body 是什么类型，Swagger 也就描述不出模型。`ActionResult<T>` 兼顾两者：

```csharp
[HttpGet("typed/{id:int}")]
[ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserDto))]
[ProducesResponseType(StatusCodes.Status404NotFound)]
public ActionResult<UserDto> GetTyped(int id)
{
    if (id <= 0)
        return NotFound();                       // 返回 IActionResult，编译期同样合法

    return new UserDto { Id = id, UserName = "jack", UserPhone = "123" };
    // 直接 return T，等价于 return Ok(dto);
}
```

| 返回类型          | 能 `return Ok(x)` | 能 `return NotFound()` | 直接 `return x` | Swagger 能识别模型     |
| ----------------- | ----------------- | ---------------------- | --------------- | ---------------------- |
| `IActionResult`   | ✅                 | ✅                      | ❌               | ❌（只显示 200 无模型） |
| `ActionResult<T>` | ✅                 | ✅                      | ✅（自动 200）   | ✅                      |

`[ProducesResponseType]` 是给 Swagger/OpenAPI 的声明，让文档列出每个状态码及其模型。

---

### 9. 纯文本与空 body

```csharp
[HttpGet("plain")]
public IActionResult Plain()
{
    return Ok("我是纯字符串");       // 200，Content-Type: text/plain
}

[HttpGet("empty")]
public IActionResult EmptyBody()
{
    return Ok();                     // 200，body 为空
}
```

`string` 是特殊情况：`Ok(string)` 走文本输出而不是 JSON 字符串（前端拿到的是不带引号的原文）。想强制返回 JSON 字符串需包成对象或设置 Content-Type。

---

## 三、完整可运行示例控制器

```csharp
using Microsoft.AspNetCore.Mvc;

namespace WebAppApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ResponsesController : ControllerBase
    {
        [HttpGet("ok")]
        public IActionResult Ok200()
            => Ok(new { Success = true, Data = new { Id = 1, Name = "jack" } });

        [HttpPost("user")]
        public IActionResult CreateUser([FromBody] AddUserRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.UserName))
                return BadRequest(new { Success = false, Message = "userName 不能为空" });
            if (string.IsNullOrWhiteSpace(request.UserPhone))
                return BadRequest(new { Success = false, Message = "userPhone 不能为空" });
            return Ok(new { Success = true, Data = request });
        }

        [HttpGet("user/{id:int}")]
        public IActionResult GetUser(int id)
        {
            if (id <= 0)
                return NotFound(new { Success = false, Message = $"id={id} 的用户不存在" });
            return Ok(new { Success = true, Data = new { Id = id, Name = "jack" } });
        }

        [HttpDelete("user/{id:int}")]
        public IActionResult DeleteUser(int id) => NoContent();

        [HttpGet("teapot")]
        public IActionResult Teapot()
            => StatusCode(StatusCodes.Status418ImATeapot, new { Success = false, Code = 418 });

        [HttpGet("admin")]
        public IActionResult Admin()
            => Unauthorized(new { Success = false, Message = "未登录或没有管理员权限" });

        [HttpPost("create")]
        public IActionResult CreateSomething([FromBody] AddUserRequest request)
            => Created("/api/Responses/user/1001", new { Success = true, Id = 1001 });

        [HttpGet("typed/{id:int}")]
        public ActionResult<UserDto> GetTyped(int id)
        {
            if (id <= 0) return NotFound();
            return new UserDto { Id = id, UserName = "jack", UserPhone = "123" };
        }
    }

    public class UserDto
    {
        public int Id { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string UserPhone { get; set; } = string.Empty;
    }
}
```

---

## 四、`.http` 一键测试片段

放到 `WebAppApi.http` 里，VS / Rider 里点“发送请求”即可：

```http
@host = http://localhost:5290

### 200
GET {{host}}/api/Responses/ok

### 400
POST {{host}}/api/Responses/user
Content-Type: application/json

{ "userName": "jack" }

### 404
GET {{host}}/api/Responses/user/-1

### 204（用 curl 看更直观）
DELETE {{host}}/api/Responses/user/5

### 418
GET {{host}}/api/Responses/teapot

### 401
GET {{host}}/api/Responses/admin

### 201
POST {{host}}/api/Responses/create
Content-Type: application/json

{ "userName": "jack", "userPhone": "123" }

### ActionResult<T>
GET {{host}}/api/Responses/typed/3
```

命令行验证状态码（PowerShell）：

```powershell
curl.exe -i http://localhost:5290/api/Responses/teapot
curl.exe -i -X DELETE http://localhost:5290/api/Responses/user/5
```

---

## 五、易踩的坑

1. **返回 `IActionResult` 时忘记 `return` 所有分支**
   非 void 方法必须有返回值，漏写分支编译不过；用 `switch` / 早返回结构最清晰。

2. **`BadRequest` 与模型校验自动 400 的重复**
   加了 `[ApiController]` 后，`[Required]` 等特性校验失败会**自动**返回 400 `ValidationProblemDetails`，和手写 `BadRequest` 的结构不同。二者混用会导致前端拿到两种错误结构，建议统一（全用特性，或全手写）。

3. **`Unauthorized` 默认无 body**
   前端会收到空响应，容易误判为“网络问题”，记得传 body。

4. **204 别想着塞 body**
   框架会忽略；要带数据就换 200。

5. **`Ok(string)` 输出的是纯文本**
   前端 `JSON.parse` 会报错，需要 JSON 时包对象。

6. **未授权/无权限的顺序**
   `401`（没身份）→ `403`（有身份没权限），不要一律返回 401，否则前端无法区分“要不要去刷新 token”。

7. **开发环境和 Swagger**
   `Program.cs` 里 `UseSwagger/UseSwaggerUI` 只在 `IsDevelopment()` 时启用，发布到非开发环境就没有 Swagger 页面了——这是默认模板的行为，不是路由没生效。
