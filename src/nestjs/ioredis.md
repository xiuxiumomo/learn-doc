## netsjs接入ioredis

使用第三方包 `@nestjs-modules/ioredis` 快速接入，连接地址 [ioredis](https://www.npmjs.com/package/@nestjs-modules/ioredis)

首先引入相关包

```ts
npm i  @nestjs-modules/ioredis ioredis -D

```

在`app.module.ts`中使用
```ts

import { RedisModule } from "@nestjs-modules/ioredis";

@Module({
  imports: [
   

    RedisModule.forRoot({
      type: "single",
      url: "redis://yourip:6380",
      options: {
        password: "yourpass",
      },
    }),
    
  ],
  controllers: [],
  providers: [],
})

```

在`provider`中使用

```ts
//modules/tags/tags.service.ts

import { InjectRedis } from "@nestjs-modules/ioredis";
import Redis from "ioredis";


export class TagsService {
  constructor(
    @InjectRedis() private readonly redis: Redis,

    @InjectRepository(Tag) private tagsRepository: Repository<Tag>
  ) {}


  async findAll(listTagDto: ListTagDto) {
    const { pageIndex = 1, pageSize = 10, id } = listTagDto;

    const query = this.tagsRepository
      .createQueryBuilder("tag")
      .skip((pageIndex - 1) * pageSize)
      .take(pageSize);

    if (id) {
      query.andWhere("tag.id = :id", { id });
    }

    const res = await query.getMany();
    //use
    await this.redis.set("yourkey",JSON.stringify(res))
    return res;
  }



}
```