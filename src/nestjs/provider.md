## 什么是provider

> 什么是 Provider？ 语义化翻译就是 提供者，在 Nest 中，除了控制器以外，几乎所有的东西都可以被视为提供者 —— service、repository、factory、helper 等等。他们都可以通过构造函数注入依赖关系，也就是说，他们可以彼此创建各种关系。但是事实上，提供者只不过是一个用 @Injectable() 装饰的简单类。


### 如何将类定义为提供者？

在类声明上，定义 `@Injectable()` 装饰器，即可将该类定义为提供者。现在，让我们为 `CatsController` 编写一个提供者，他提供了一些方法，用于处理复杂的业务逻辑：

```ts

import { Injectable } from '@nestjs/common'

@Injectable()
export class CatService {
  private readobly cats: Cat[] = [];

  async create(createCatDto: CreateCatDto) {
    this.cats.push(createCatDto)
  }

  async remove(id: number) {
    this.cats.splice(cats.indexOf(cats.find(cat => cat.id === id)), 1);
  }

  async update(id: number,updateCatDto: UpdateCatDto) {
    if(updateCatDto.name) this.cats.find(cat => cat.id === id).name = updateCatDto.name;
  }

  async fineOne(id: number): Cat {
    return this.cats.find(cat => cat.id === id);
  }

  async fineAll(): Cat[] {
    return this.cats;
  }
}

// Cat 是一个接口，用来定义其数据结构
export interface Cat {
    id: number;
    name: string
}
```

### 如何日让CatsController调用CatsService中的方法？

在开始调用`CatsService`前，需要了解一下`DI`(依赖注入)的概念。简单的讲，一个类的实例化对象，作为另一个的参数。
在你了解依赖注入的概念后，我们开始在 `CatsController` 中，使用依赖注入将`CatsService`注入到`CatsColtroller`的构造函数:

> 在 Nest 中，由于 TypeScript 语言的特性，管理依赖项非常容易，因为它们将通过类型来解析，然后传递给控制器的构造函数。
>


```ts
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {

  }
   @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catsService.create(createCatDto);
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    await this.catsService.remove(id);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateCatDto: UpdateCatDto) {
    await this.catsService.update(id, updateCatDto);
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return this.catsService.findOne(id);
  }

  @Get()
  async findAll() {
    return this.catsService.findAll();
  }
}


```

我们将`catsService`作为`CatsController`类的参数，实现了依赖注入。