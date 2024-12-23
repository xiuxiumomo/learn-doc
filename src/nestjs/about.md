# NestJS 简介

NestJS 是一个用于构建高效、可扩展的 Node.js 服务器端应用程序的框架。它使用 TypeScript 编写，并结合了面向对象编程、函数式编程和函数反应式编程的元素。NestJS 构建在 Express 之上，但也可以与其他库一起使用。

## 原理

NestJS 的核心是模块化的架构，允许开发者将应用程序分解成多个模块，每个模块负责特定的功能。主要原理包括：

1. **模块（Modules）**：组织代码的基本单位，类似于功能块。
2. **控制器（Controllers）**：处理传入的请求并返回响应。
3. **提供者（Providers）**：服务、仓库等，可以注入到控制器或其他提供者中。
4. **依赖注入（Dependency Injection）**：通过构造函数注入依赖，提升代码的可测试性和可维护性。




## 基本使用方法




### 安装 NestJS CLI

首先，安装 NestJS CLI 工具：

```bash
npm install -g @nestjs/cli
```

### 创建新项目

使用 CLI 创建一个新的 NestJS 项目：

```bash
nest new project-name
```

### 项目结构

创建的项目包含以下主要文件和文件夹：

- `src/`：源代码目录
  - `app.module.ts`：应用程序的根模块
  - `app.controller.ts`：处理 HTTP 请求的控制器
  - `app.service.ts`：提供业务逻辑的服务

### 创建模块

可以使用 CLI 创建新的模块：

```bash
nest generate module module-name
```

### 创建控制器

同样，可以使用 CLI 创建新的控制器：

```bash
nest generate controller controller-name
```

### 创建服务

使用 CLI 创建新的服务：

```bash
nest generate service service-name

```

### 使用快捷键

- nest g co book  //创建一个 book 控制器
- nest g s book  //创建一个 book server 服务
- nest g mo book  //创建一个 book 模块
- nest g gu book  //创建一个  book 守卫
- nest g in book    //创建一个 book 拦截器
- nest g f book  //创建一个book 过滤器

```shell
  name          │ alias       │ description                                  │
│ application   │ application │ Generate a new application workspace         │
│ class         │ cl          │ Generate a new class                         │
│ configuration │ config      │ Generate a CLI configuration file            │
│ controller    │ co          │ Generate a controller declaration            │
│ decorator     │ d           │ Generate a custom decorator                  │
│ filter        │ f           │ Generate a filter declaration                │
│ gateway       │ ga          │ Generate a gateway declaration               │
│ guard         │ gu          │ Generate a guard declaration                 │
│ interceptor   │ itc         │ Generate an interceptor declaration          │
│ interface     │ itf         │ Generate an interface                        │
│ library       │ lib         │ Generate a new library within a monorepo     │
│ middleware    │ mi          │ Generate a middleware declaration            │
│ module        │ mo          │ Generate a module declaration                │
│ pipe          │ pi          │ Generate a pipe declaration                  │
│ provider      │ pr          │ Generate a provider declaration              │
│ resolver      │ r           │ Generate a GraphQL resolver declaration      │
│ resource      │ res         │ Generate a new CRUD resource                 │
│ service       │ s           │ Generate a service declaration               │
│ sub-app       │ app         │ Generate a new application within a monorepo
```

单条示例

```ts
nest g co book

```
一次性设置一整个模块,如生成一整个book模块

```ts
nest g resource book



```

### 示例代码

以下是一个简单的示例，展示如何创建一个基本的控制器和服务：

```typescript
// app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

### 启动应用

在项目根目录下运行以下命令启动应用：

```bash
npm run start
```

访问 `http://localhost:3000`，你应该会看到 "Hello World!"。

