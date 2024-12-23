## 指令

### 系统相关

```shell 
uname -a  ## 查看系统信息
sudo ## 临时获取超级用户权限  
su ## 切换到 root 用户  
sudo shutdown ## 关机  
sudo reboot ## 重启  
sudo nautilus ## 进入有 root 权限的文件管理器  
ps -A ## 查看当前有哪些进程  
kill 5 ## 结束进程，5 为进程号  
sudo fdisk -l ## 查看磁盘信息  
sudo mount /dev/sdb1 /mnt ## 挂载磁盘到某一路径  
sudo mount -r /dev/sdb1 /mnt/ ## 以只读方式挂载  
sudo umount /dev/sdb1 ## 卸载磁盘  
sudo blkid ## 查看磁盘分区的 UUID  
sudo vi /etc/fstab ## 开机自动挂载磁盘  
## UUID=11263962-9715-473f-9421-0b604e895aaa /data ext4 defaults 0 1  

sudo mount -a ## 验证一下配置是否正确  
efibootmgr ## 查看系统启动顺序  
ifconfig ## 网络配置，IP 地址查看  
man ## command-name 查找命令详细手册  
command-name --help ## 查找某一命令的帮助  

设置静态 IP 地址  
```shell
sudo vi /etc/network/interfaces
```  
添加以下内容  
```shell
auto enp129s0f1  
iface enp129s0f1 inet static  
address 192.168.1.254 # IP 地址  
gateway 192.168.1.1 # 网关  
netmask 255.255.255.0 # 子网掩码  
dns-nameservers 8.8.8.8 8.8.4.4 # DNS 解析  
```

用户及权限管理  
```shell
sudo adduser username ## 新添加用户  
sudo passwd root ## 设置 root 用户密码  
sudo vim /etc/sudoers ## 赋予新用户 root 权限  
# User privilege specification  
root ALL=(ALL:ALL) ALL  
username ALL=(ALL:ALL) ALL ## 新添加此行即可  
chown user-name filename ## 改变文件的所属用户  
chmod u+rwx g+r o+r filename ## 用户添加读写运行权限，组成员添加读权限，其他用户添加读权限  
chmod a+w filename ## 所有用户添加写权限  
chmod 777 filename ## 所有用户添加读写运行权限  
```

软件安装  
```shell
sudo apt-get update ## 更新软件列表，在文件 /etc/apt/sources.list 中列出  
sudo apt-get upgrade ## 更新软件  
sudo apt-get install software-name ## 安装在软件库中的软件  
sudo apt-get remove ## 卸载软件  
sudo apt-get purge ## 卸载软件并删除配置文件  
sudo apt-get clean ## 清除软件包缓存  
sudo apt-get autoclean ## 清除缓存  
sudo apt-get autoremove ## 清除不必要的依赖  
sudo apt-get install -f ## 修复安装依赖问题  
sudo dpkg -i *.deb ## 安装 deb 软件  
dpkg -l ## 查看所有安装的软件  
dpkg -l | grep software-name ## 配合 grep 命令可查看具体的某一个软件是否安装  
sudo echo "google-chrome-stable hold" | sudo dpkg --set-selections ## 不更新某个软件  
sudo echo "google-chrome-stable install" | sudo dpkg --set-selections ## 恢复更新某个软件  
```

目录文件操作  
```shell
cd ## 切换目录，～为家目录，/为根目录，./为当前目录  
cd .. ## 切换到上级目录  
cd - ## 切换到上一次所在的目录  
pwd ## 查看当前所在目录  
ls ## 查看当前目录下的文件夹和文件名，-a显示隐藏文件，-l显示文件详细信息  
mkdir directory-name ## 新建文件夹  
rmdir directory-name ## 删除文件夹(必须为空)  
rm -rf directory-name ## 强制并递归删除文件夹  
cp src-file dst-file ## 复制文件  
mv src-file dst-file ## 移动文件  
ln -s src-file dst-file ## 建立软链接  
find path -name string ## 查找路径所在范围内满足字符串匹配的文件和目录  
cat filename ## 显示文件内容  
head -n 2 filename ## 显示文件前两行的内容  
tail -n 2 filename ## 显示文件末尾两行的内容 

df -hl 

du -sh dir
du -sh *   ##cd /下面 获取所有大小

du -h  .  ## 查看系统内所有文件大小


tar zcvf 2020-11-15-23.tar.gz 2020-11-15-access.log 

tar -czvf a.tar.gz 1.txt 2.txt  ##将1.txt 2.txt 压缩成a.tar.gz
## 解压文件
tar zvxf 压缩文件名.tar.gz 

```


```

终端快捷键  
```shell
ctrl + l ## 清屏  
ctrl + c ## 终止命令  
ctrl + d ## 退出 shell  
ctrl + z ## 将当前进程置于后台，fg 还原  
ctrl + r ## 从命令历史中找  
ctrl + u ## 清除光标到行首的字符（还有剪切功能）  
ctrl + w ## 清除光标之前一个单词 （还有剪切功能）  
ctrl + k ## 清除光标到行尾的字符（还有剪切功能）  
ctrl + y ## 粘贴 Ctrl+u 或 Ctrl+k 剪切的内容  
ctrl + t ## 交换光标前两个字符  
Alt + d ## 由光标位置开始，往行尾删删除单词  
Alt + . ## 使用上一条命令的最后一个参数  
Alt – b || ctrl + 左方向键 ## 往回(左)移动一个单词  
Alt – f || ctrl + 右方向键 ## 往后(右)移动一个单词  
```

修改文件  
```shell
i ## 进入编辑  
esc ## 退出编辑  
wq ## 保存退出  
q! ## 不保存退出  
wq! ## 强制保存退出  
```

查看ip  
```shell
ifconfig -a ## 查看所有网络接口信息
```  
// 192.168.26.128 虚拟主机  

删除文件或文件夹  
```shell
rm -rf dirName ## 删除文件或文件夹
```  

重启nginx  
```shell
sudo nginx -s reload ## 重启 Nginx
```  

启动mysql  
```shell
sudo service mysql start ## 启动 MySQL 服务
```  

配置redis环境  
```shell
ps -agx|grep redis ## 查看 redis 启用情况  
netstat -nlt|grep 6379 ## 查看 6379 端口号使用情况  
config set requirepass 123 ## 设置密码  
auth 123 ## 登录  
sudo /etc/init.d/redis-server restart ## 重启 Redis  
```  

## Linux设置防火墙

### 防火墙设置

**设置开机启动/关闭防火墙**  
```shell
systemctl enable firewalld.service ## 设置防火墙开机启动
systemctl disable firewalld.service ## 设置防火墙开机不启动
```  

**启动/关闭防火墙**  
```shell
systemctl start firewalld ## 启动防火墙
systemctl stop firewalld ## 关闭防火墙
```  

**检查防火墙状态**  
```shell
systemctl status firewalld ## 查看防火墙状态
```  

### 端口设置

**查看防火墙状态**  
```shell
firewall-cmd --state ## 查看防火墙状态
```  
**查看开放的端口**  
```shell
firewall-cmd --list-ports ## 查看开放的端口
```  
**新增/关闭端口**  
```shell
firewall-cmd --zone=public --add-port=9200/tcp --permanent ## 新增端口
firewall-cmd --zone=public --remove-port=9200/tcp --permanent ## 关闭端口
```  

**重载配置**  
```shell
firewall-cmd --reload ## 重载防火墙配置
```  

### 修改host

先进入地址  
```shell
vi /etc/hosts ## 编辑 hosts 文件
```  
```shell
124.522.111.111 yourdomain.com ## 添加域名映射
```  











