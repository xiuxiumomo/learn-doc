 
## copySync 复制目录


```ts
copySync(path.resolve(__dirname, "a"), path.resolve(__dirname, "b"));
```
## removeSync 删除目录

```ts
removeSync(path.resolve(__dirname, "a"))
```

## ensureDirSync 创建目录 支持多级

```ts
ensureDirSync(path.resolve(__dirname, "c/xx"))

ensureDirSync(path.resolve(__dirname, "c/1.js"))

```
## ensureFileSync 创建文件 支持多级


```ts
//多级
ensureFileSync(path.resolve(__dirname, "e/1.txt")) 
//一级
ensureFileSync(path.resolve(__dirname, "e.txt"))
```

## emptyDirSync 清空目录 

目录存在，下面的所有子集全部删除

```ts
emptyDirSync(path.resolve(__dirname, "c"))
```

## readJSONSync  读取json


```ts
const res = readJSONSync(path.resolve(__dirname, "my.json"),{encoding:"utf-8"})

```
##  writeJsonSync 写入json

写入json 注意会被覆盖源文件

```ts

writeJsonSync(path.resolve(__dirname, "my.json"), {address:"aa街道",school:'hight'},{spaces:2,EOL: '\r\n'})

```


## moveSync 重命名或者移动文件

**文件重命名**

将 `my.json` 重命名 `my2.json`

```ts
moveSync(path.resolve(__dirname, "my.json"), path.resolve(__dirname, "my2.json"));
```

**文件夹重命名**


将目录`dir` 重命名 `dir2`


```ts
moveSync(path.resolve(__dirname, "dir"), path.resolve(__dirname, "dir2"));
```

**移动文件或者文件夹**

将文件`my.json`移动到`dir/my.json` 注意，当`dir`不存在的时候，会自动创建
```ts
moveSync(path.resolve(__dirname, "my.json"), path.resolve(__dirname, "dir/my.json"));
```

将文件夹`dir-a` 移动到 `dir/dir-a`

```ts

moveSync(path.resolve(__dirname, "dir-a"), path.resolve(__dirname, "dir/dir-a"));
```


## pathExistsSync 判断文件/文件夹是否存在

```ts
//文件
const res = pathExistsSync(path.resolve(__dirname,'e.txt'))
//文件夹
const res = pathExistsSync(path.resolve(__dirname,'dir-a'))
console.log(res)
```


## 源码

### 初始化

```ts

pnpm init 

pnpm i  fs-extra @types/fs-extra -D

pnpm i esno -g

```
### 支持esm

```ts
{
	"scripts": {
    "dev": "esno ./src/index.ts"
  },
  "dependencies": {
		"fs-extra": "^11.2.0",
		"@types/fs-extra": "^11.0.4"
	},
  "type": "module" //add
}

```


## 使用
```js


import path from "node:path";
import { fileURLToPath } from "node:url";
import { copySync ,removeSync,ensureDirSync,ensureFileSync,emptyDirSync,readJSONSync, writeJsonSync, moveSync, pathExistsSync} from "fs-extra/esm";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const res = pathExistsSync(path.resolve(__dirname,'e.txt'))

console.log(res)
```