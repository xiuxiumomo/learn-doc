## docker部署wordpress

前提条件，已经安装docker-compose环境了。

新建 `mkdir -p /mnt/wordpress/wordpress-data`,`mkdir -p /mnt/wordpress/mysql-data` 用来存放和挂载wordpress相关数据


在`/mnt/wordpress`下新建 `wordpress-compose.yaml`来启动服务，写入如下的内容
```shell
version: '3.8'

services:
  wordpress:
    image: wordpress:latest
    ports:
      - "6666:80" # 映射 WordPress 的 80 端口到主机的 6666 端口
    environment:
      WORDPRESS_DB_HOST: db:3306 # 指定 MySQL 数据库的主机和端口
      WORDPRESS_DB_USER: jack # 数据库用户
      WORDPRESS_DB_PASSWORD: jack # 数据库密码
      WORDPRESS_DB_NAME: wordpress
    depends_on:
      - db
    volumes:
      - ./wordpress-data:/var/www/html # 挂载 WordPress 数据目录到主机

  db:
    image: mysql:5.7
    ports:
      - "3206:3306" # 映射 MySQL 的 3306 端口到主机的 3206 端口
    environment:
      MYSQL_ROOT_PASSWORD: jack # 数据库根密码
      MYSQL_DATABASE: wordpress # 默认数据库
      MYSQL_USER: jack # 数据库用户
      MYSQL_PASSWORD: jack # 数据库密码
    volumes:
      - ./my.cnf:/etc/mysql/conf.d/my.cnf # 挂载自定义配置文件
      - ./mysql-data:/var/lib/mysql # 挂载 MySQL 数据目录到主机
    deploy:
      resources:
        limits:
          memory: 512M # 根据需要调整内存限制

```

执行脚本



```shell
cd /mnt/wordpress
## 启动脚本
docker-compose -f wordpress-compose.yaml up -d
```

访问服务

在浏览器使用`ip:6666`访问前台页面，或者使用nginx转发服务,使用域名来访问你自己的前台即可

```shell
server {    
		listen 80;
    server_name  blog.jack.com;
    location / {
        proxy_pass         http://0.0.0.0:6666;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_set_header   User-Agent $http_user_agent;
    }
}

```