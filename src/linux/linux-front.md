## 前端环境下用脚本部署环境
使用常规的步骤安装前端环境

### 安装openresty

先安装相关编译依赖

```shell

yum -y install make zlib-devel gcc-c++ libtool openssl openssl-devel

```

在`/mnt`下新建`openresty`,将下载好的`openresty-1.15.8.3.tar.gz`安装宝放在里面解压文件

```shell

tar -zxvf openresty-1.15.8.3.tar.gz

cd  openresty-1.15.8.3

## 执行

./configure --prefix=/mnt/openresty --with-luajit --with-http_iconv_module --with-http_postgres_module

## 继续执行
make && make install
```

以上步骤完成后将nginx指令写入全局配置


```shell
vi /etc/profile

export PATH=$PATH:/mnt/openresty/nginx/sbin
## 保存使全局配置生效
source  /etc/profile 
```

将开机自启文件加入全局

```shell
touch /usr/lib/systemd/system/nginx.service

```

写入的内容如下
```shell

[Unit]
Description=nginx
After=network.target
 
[Service]
Type=forking
ExecStart=/mnt/openresty/nginx/sbin/nginx
ExecReload=/mnt/openresty/nginx/sbin/nginx -s reload
ExecStop=/mnt/openresty/nginx/sbin/nginx -s quit
PrivateTmp=true
 
[Install]
WantedBy=multi-user.target
```
设置开机自启/警用，这样服务器发生意外后重启了，nginx会自己启动
```shell
systemctl enable nginx.service
systemctl disable nginx.service
```


### 安装nvm服务

在服务器的根目录下拉取nvm脚本


```shell

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

```

将nvm作用到全局

```shell
echo "source ~/nvm/nvm.sh" >> ~/.bashrc

source ~/.bashrc

```

nvm相关下载版本

```shell

nvm install 16.18.0

## 设置默认版本

nvm alias default v16.18.0
```


推荐使用脚本一键安装如下前端环境

### 磁盘挂载


新建 `mkdir /home/shell` 文件夹存放相关脚


`touch mount.shell` 写入文件如下
```shell
#!/bin/bash

# 查看当前可用的磁盘
fdisk -l

# 对新磁盘进行分区
# 注意看/dev/vdb1有些是这个 有些是 /dev/vdb，根据服务器具体情况修改
fdisk -S 56 /dev/vdb1 << EOF
n
p
1


wq
EOF

# 格式化新分区
# 注意看/dev/vdb1有些是这个 有些是 /dev/vdb，根据服务器具体情况修改
mkfs.ext3 /dev/vdb1

# 挂载新分区到/mnt目录
# 注意看/dev/vdb1有些是这个 有些是 /dev/vdb，根据服务器具体情况修改
echo '/dev/vdb1  /mnt ext3    defaults    0  0' >> /etc/fstab
mount -a

# 查看是否成功挂载
df -h
```

### 下载node服务相关

前提是已经在`/home/tools`下存放了`tools/nvm-v0.39.1.tar.gz`安装包

```shell

#!/bin/bash
##创建nvm安装路径 从tools复制nvm
mkdir /root/.nvm && cp /home/tools/nvm-v0.39.1.tar.gz   /root/.nvm/
## 进入到.nvm
cd /root/.nvm
## 解压
tar -zxvf nvm-v0.39.1.tar.gz --strip-components 1  -C /root/.nvm
## 执行脚本
echo 'export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >>~/.bashrc


# Activate NVM
source ~/.bashrc

# Install the latest LTS version of Node.js using NVM
nvm install v16.18.1 && nvm alias default v16.18.1 && source ~/.bashrc


# 下载yarn

npm install -g yarn

yarn  --version

## 下载PM2

npm install -g pm2

pm2 --version
## 加入开机自启动
pm2 startup
## 下载nrm 
npm install  -g nrm 
```


### 安装openresty
前提是已经在`/home/tools`下上传了`openresty-1.15.8.3.tar.gz`安装包

```shell

#!/bin/bash
##判断openresty是否存在
if [ ! -d "/mnt/openresty" ]; then
  mkdir /mnt/openresty
fi
# 下载依赖
yum install  perl pcre-devel openssl-devel gcc curl postgresql-devel -y
# 将已下载的文件从tools移动到tmp文件夹
cp /home/tools/openresty-1.15.8.3.tar.gz  /tmp
## 进入缓存文件夹
cd /tmp
# Extract OpenResty
tar -xzf openresty-1.15.8.3.tar.gz
cd openresty-1.15.8.3
# Configure OpenResty
./configure --prefix=/mnt/openresty  --with-luajit --with-http_iconv_module --with-http_postgres_module --with-http_stub_status_module
# Compile and install OpenResty
make -j4
make install
# Add OpenResty to PATH environment variable
echo 'export PATH=/mnt/openresty/nginx/sbin:$PATH' >>~/.bashrc
source ~/.bashrc
# Create OpenResty service file
echo '[Unit]
Description=OpenResty
After=network.target
[Service]
Type=forking
PIDFile=/mnt/openresty/nginx/logs/nginx.pid
ExecStart=/mnt/openresty/nginx/sbin/nginx -c /mnt/openresty/nginx/conf/nginx.conf
ExecReload=/mnt/openresty/nginx/sbin/nginx -s reload
ExecStop=/mnt/openresty/nginx/sbin/nginx -s stop
[Install]
WantedBy=multi-user.target' >/etc/systemd/system/openresty.service
# Reload systemd configuration
systemctl daemon-reload
# Enable OpenResty service on boot
systemctl enable openresty.service
echo "OpenResty has been successfully installed to /mnt/openresty/ and enabled on boot."

```