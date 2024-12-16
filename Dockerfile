## node环境
FROM node:18-alpine as build-stage
## 作者
LABEL author="lsqxxmm@gmail.com"
## docker容器的工作目录
WORKDIR /app

## 复制当前文件
COPY  pagckage*.json /

## 加载node
RUN npm install

## 复制所有文件
COPY . .
## 打包
RUN  npm run build
## nginx环境
FROM nginx:alpine
## 复制文件
COPY --from=build-stage /app/docs /usr/share/nginx/html

## 暴露端口
EXPOSE 80
## 启动
CMD [ "nginx","-g","daemon off;" ]