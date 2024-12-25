# NestJS Interceptor 用法

在 NestJS 中，拦截器（Interceptor）是一种用于拦截和转换 HTTP 请求和响应的机制。拦截器可以用于记录日志、处理错误、修改响应等。

## 创建拦截器

首先，使用 `@Injectable()` 装饰器创建一个拦截器类，并实现 `NestInterceptor` 接口：

```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return next
      .handle()
      .pipe(
        map(data => {
          console.log(`After... ${Date.now() - now}ms`);
          return data;
        }),
      );
  }
}
```

使用拦截器，为返回统一的接口格式

```ts
// src/interceptor/transform/transform.interceptor.ts


import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        code: 200,
        data,
        message: "请求成功",
      }))
    );
  }
}


```

在`main.ts`中引入该拦截器


```ts


//接口格式化
import { TransformInterceptor } from "./interceptor/transform/transform.interceptor";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformInterceptor());
  //...
  await app.listen(3939);
}
bootstrap();

```

