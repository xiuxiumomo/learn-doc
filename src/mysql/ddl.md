## DDL操作
> Data Definition Languages 即：数据库定义语句

**数据库相关**

### 创建数据库
```sql
create database mydb1;
```

### 查看数据库

```sql
show databases;
```

### 切换使用数据库

```sql
use mydb1;
```

### 产看数据库中的表

```sql
show tables;
```

### 删除数据库

```sql
drop database mydb1;
```


**数据库表相关**

### 创建数据表

```text
[if not exists] 是可选的
create table [if not exists] tableName(
  file1 数据类型,
  file2 数据类型,
);

```

```sql
create table if not exists students (
  sid int,
  name varchar(20),
  gender varchar(20),
  age int,
  address varchar(100),
  score float
)
```

### 查看表定义

```sql

desc student;

```

### 删除表

```sql
drop table student;

```


### 修改表

> 对于已经创建好的表，尤其是已经有大量数据的表，如果需要对表做一些结构上的改变，我们可以先将表删除（drop），然后再按照新的表定义重建表。这样做没有问题，但是必然要做一些额外的工作，比如数据的重新加载。而且，如果有服务在访问表，也会对服务产生影响。因此，在大多数情况下，表结构的更改一般都使用 alter table语句，以下是一些常用的命令


#### 增加字段

语法：ALTER TABLE 表名 ADD  字段名  字段类型;
```sql
alter table student add dept varchar(20);
```

#### 修改表字段
ALTER TABLE 表名 change  旧的字段名  新的字段名 字段类型;

alter table 表名 modify 字段名称 字段类型;

```sql
-- 修改字段名称
alter table student change dept deptament varchar(30)

-- 只修改数据类型
alter table student  modify dept varchar(60);
```

#### 删除字段

```sql
alter table student drop column deptament;
```

#### 修改表名0

```sql

alter table student rename stu;
```