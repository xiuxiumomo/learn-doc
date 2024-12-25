## 在nestjs中接入日志

引入相关插件

```ts
npm i nest-winston winston winston-daily-rotate-file -D


```

在`app.module.ts`中引入

```ts
import { WinstonModule } from "nest-winston";
import * as winston from "winston";
import "winston-daily-rotate-file";


@Module({
  imports: [
    //...other
    WinstonModule.forRoot({
    level: "warn",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, message }) => {
        return `${timestamp} [${level}]: ${message}`;
      })
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.DailyRotateFile({
        filename: "logs/application-%DATE%.log",
        datePattern: "YYYY-MM-DD",
        zippedArchive: true,
        maxSize: "20m",
        maxFiles: "14d",
      }),
    ],
  }),
   
  ],
  controllers: [],
  providers: [],
})
```

在`main.ts`中使用全局模块

```ts
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //other
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  await app.listen(3939);
}

```


在自己的模块中使用可以是`controller`,也可以是`provider`,这里已控制器为例


```ts
//src/module/tags/tags.controller.ts
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";

@Controller("tags")
export class TagsController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly tagsService: TagsService
  ) {}


  @Post("list")
  async findAll(@Body() listTagDto: ListTagDto) {
    const res = await this.tagsService.findAll(listTagDto);
    this.logger.warn(`查询列表${JSON.stringify(res)}`);
    return res;
  }
}


```