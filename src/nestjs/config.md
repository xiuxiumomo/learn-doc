## nestjs中环境变量区分环境信息

> nestjs中使用`config`和`cross-env`分环境配置数据库信息等


首先下在两个包
`config`是一个作用在node环境的配置文件包，配置文件可以是json的格式 [链接](https://github.com/node-config/node-config)

```shell
npm i  config cross-env -D

```

新建文件`config/development.json`和`config/production.json`写入自己的数据库配置
```json
//development.json
{
  "mysql": {
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "123456",
    "database": "note-one",
    "message": "This is a message from the development.json file"
  },
  "redis": {
    "url": "xx",
    "port": 6380,
    "password": "xx"
  }
}
```

在`app.module`中引入该配置文件，且使用


```ts
import * as config from "config";
export const mysqlConfig = config.get("mysql");
export const redisConfig = config.get("redis");




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: mysqlConfig.host,
      port: mysqlConfig.port,
      username: mysqlConfig.username,
      password: mysqlConfig.password,
      database: mysqlConfig.database,
      entities: ["dist/modules/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),

    RedisModule.forRoot({
      type: "single",
      url: redisConfig.url,
      options: {
        password: redisConfig.password,
      },
    }),
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


```


在`package.json`中，指定环境变量

```json

"scripts": {

  "start:dev": "cross-env NODE_ENV=development nest start --watch",
  "start:debug": "nest start --debug --watch",
  "start:prod": "cross-env NODE_ENV=production  node dist/main",
  "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix", 
}

```