## controller模块

> 控制器模块，控制器接受外部的路由以及对路由做出响应。



### 如何将类定义为控制器？

在类型声明上使用`@controller()`装饰器。

```ts
export function Coltroller(prefix?: string): ClassDecolrator {
  const path = isUndefined(prefix) ? '/' : prefix;
  return (target: object) =>{
    Reflect.defineMetadata(PATH_METADATA, path, target);
  }
}
```

可以看出，控制器装饰器有一个可选的方法参数，该参数默认值为 /，其作用就是定义当前控制器类下所有路由方法的前缀，这样以来，就可以避免我们在定义路由时出现多余的相同前缀。

我们自己定义个控制器

```ts
import { Controller } from '@nestjs/common'
@Controller('cats') 
export class CatsController() {}
```

### 如何在控制器上定义路由？

在类的方法声明上，定义 @Get()、@Post()、@Put()、@Patch()、@Delete()、@Options()、@Head()、@All()。这些装饰器都表示各自的 HTTP 请求方法。

现在，让我们在上述的 CatsController 类中定义实际开发中常用的几种路由映射：

```ts
import { Controller } from '@nestjs/common'
@Controller('cats') 
export class CatsController() {
  @Post() 
  async create(@Body() createCatDto: CreateCatDto) {
    return 'create a cate'
  }
  @Delete(':id') 
  async remove(@Param('id') id) {
    return `remove  ${id} cats`
  }
  @Put(':id')
  async update(@Param('id') id) {
    return `update  ${id} cats`
  }
  @Get(":id")
  async fineOne(@Param('id') id) {
    return `This action returns a #${id} cat`;
  }
  
  @Get()
  async findAll(@Query() query) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

}


// createCatDto 和 updateCatDto 可以使用类来定义其结构：
export class CreateCatDto {
    id: number;
    name: string;
}

export class UpdateCatDto {
    name: string;
}
```

在定义路由时，方法参数中，我们使用到了 @Body()、@Query()、@Param() 这样的参数装饰器，他们是什么意思呢？用过 express 的同学都会经常接触到：req、res、next、req.body、req.query、req.params等等，诸如此类的特性，下面我们列举出，在 Nest 框架中，这些装饰器与 express 中的使用方法是如何对应的：

饰器与 express 中的使用方法是如何对应的：

| Nest                     | Express                          |
| ------------------------ | -------------------------------- |
| @Request()               | req                              |
| @Response()              | res                              |
| @Next()                  | next                             |
| @Session()               | req.session                      |
| @Param(param?: string)   | req.params / req.params[param]   |
| @Body(param?: string)    | req.body / req.body[param]       |
| @Query(param?: string)   | req.query / req.query[param]     |
| @Headers(param?: string) | req.headers / req.headers[param] |

> Tips：Nest 底层默认使用了 express 作为 web 层的框架
> 注意：如果在方法参数中定义了 @Res() 或 @Next()，此时该方法的 return 语句会被阻塞，因为 return 形式的返回是 nest 标准形式，而一但使用了上述两个装饰器后，nest 不会在用标准 形式返回数据，此时必须使用 res.send / res.end / res.json 等，这种 express 特定的写法返回数据。


### 通配符路由

Nest 也支持基于模式的路由。例如，星号用作通配符，将匹配任何字符组合。示例：

```ts
@Get('ab*cd')
async findAll() {
  return 'This route uses a wildcard';
}

````
以上路由路径将匹配`ABCD、ab _ CD、abecd`等。字符 `？、+、*、()` 是正则表达式对应项的子集。连字符`(-)`和点`(.)`由字符串路径按字面解释。




### 状态码

如上所述，默认情况下，除 `POST` 请求的状态码是 `201` 以外，其余请求的状态码总是 `200`，但我们可以通过在方法声明上添加 `@HttpCode(...)` 装饰器来改变默认的状态码：

```ts
@Post()
@HttpCode(204)
async create() {
  return 'This action adds a new cat';
}
```

### 响应头
若要指定自定义响应头，可以使用 @Header() 装饰器：

```ts
@Post()
@Header('Cache-Control', 'none')
async create() {
  return 'This action adds a new cat';
}
```