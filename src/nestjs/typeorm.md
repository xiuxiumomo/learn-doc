# 在 NestJS 中使用 TypeORM

TypeORM 是一个 ORM 框架，可以与 TypeScript 和 JavaScript (ES7, ES6, ES5) 一起使用，并且支持多种数据库。本文将介绍如何在 NestJS 项目中集成和使用 TypeORM。

## 安装依赖

首先，安装必要的依赖包：

```bash
npm install --save @nestjs/typeorm typeorm mysql2
```



## 配置 TypeORM

在 `app.module.ts` 文件中配置 TypeORM：

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "yourpass",
      database: "note-one",
      entities: ["dist/modules/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
```

## 创建实体

创建一个实体类，例如 `user.entity.ts`：

```typescript
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
```

## 创建模块和服务

创建一个用户模块和服务来处理用户数据：

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
```

## 创建服务

在 `users.service.ts` 文件中创建服务：

```typescript
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
```

## 创建控制器

在 `users.controller.ts` 文件中创建控制器：

```typescript
import { Controller, Get, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(+id);
  }
}
```

这样，你就完成了在 NestJS 中集成和使用 TypeORM 的基本步骤。