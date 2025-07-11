/*
 * @Author: xiuxiumomo
 * @Date: 2024-10-08 15:44:22
 * @Last Modified by: xiuxiumomo
 * @Last Modified time: 2025-07-03 10:33:58
 */
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xiuxiumomo",

  description:
    "WEB3,空头项目，撸空投，薅羊毛，AI薅羊毛，空投入门，前端学习，Vue,vue2,vue3,typescript,linux学习，docker,docker学习",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "快速学习", link: "/" },
    ],

    sidebar: [
      {
        text: "Web3项目",
        collapsed: true,
        items: [
          { text: "挂机项目", link: "/src/web3/hung.md" },

          { text: "2025-01-22", link: "/src/web3/2025-01-22.md" },
        ],
      },

      {
        text: "javascript",
        collapsed: true,
        items: [
          { text: "数据类型", link: "/src/javascript/base" },
          { text: "错误处理", link: "/src/javascript/error" },
          { text: "循环和遍历", link: "/src/javascript/for" },
          { text: "函数", link: "/src/javascript/function" },
          { text: "表达式", link: "/src/javascript/my-expression" },
          { text: "数学", link: "/src/javascript/math" },
          { text: "时间对象", link: "/src/javascript/time" },
          { text: "字符串", link: "/src/javascript/string" },
          { text: "正则", link: "/src/javascript/reg" },
          { text: "数组", link: "/src/javascript/arrs" },
          { text: "对象", link: "/src/javascript/object" },
          { text: "map和set结构", link: "/src/javascript/map-set" },
          { text: "面向对象", link: "/src/javascript/oop" },
          { text: "相等", link: "/src/javascript/equal" },
          { text: "事件", link: "/src/javascript/events" },
          { text: "高阶函数", link: "/src/javascript/high-function" },
          { text: "原型链", link: "/src/javascript/prototype/prototype" },
          { text: "ES6-1", link: "/src/javascript/ES6-1" },
          { text: "ES6-2", link: "/src/javascript/ES6-2" },
          { text: "ES6-3", link: "/src/javascript/ES6-3" },
          { text: "ES6-4", link: "/src/javascript/ES6-4" },
          { text: "ES6-5", link: "/src/javascript/ES6-5" },
          { text: "ES6-6", link: "/src/javascript/ES6-6" },
          { text: "手写常见方法", link: "/src/other/write-js/index.md" },
        ],
      },
      {
        text: "Typescript",
        collapsed: true,
        items: [
          { text: "简介", link: "/src/typescript/intro" },
          { text: "基本用法", link: "/src/typescript/basic" },
          { text: "any类型", link: "/src/typescript/any" },
          { text: "类型系统", link: "/src/typescript/types" },
          { text: "数组", link: "/src/typescript/array" },
          { text: "元组", link: "/src/typescript/tuple" },
          { text: "symbol类型", link: "/src/typescript/symbol" },
          { text: "函数", link: "/src/typescript/function" },
          { text: "对象", link: "/src/typescript/object" },
          { text: "interface", link: "/src/typescript/interface" },
          { text: "类", link: "/src/typescript/class" },
          { text: "泛型", link: "/src/typescript/generics" },
          { text: "Enum 类型", link: "/src/typescript/enum" },
          { text: "类型断言", link: "/src/typescript/assert" },
          { text: "模块", link: "/src/typescript/module" },
          { text: "namespace", link: "/src/typescript/namespace" },
          { text: "装饰器", link: "/src/typescript/decorator" },
          {
            text: "装饰器（旧语法）",
            link: "/src/typescript/decorator-legacy",
          },
          { text: "declare 关键字", link: "/src/typescript/declare" },
          { text: "d.ts 类型声明文件", link: "/src/typescript/dts" },
          { text: "运算符", link: "/src/typescript/operator" },
          { text: "类型映射", link: "/src/typescript/mapping" },
          { text: "类型工具", link: "/src/typescript/utility" },
          { text: "注释指令", link: "/src/typescript/comment" },
          {
            text: "tsconfig.json 文件",
            link: "/src/typescript/tsconfig.json.md",
          },
          { text: "tsc 命令", link: "/src/typescript/tsc" },
          { text: "React 支持", link: "/src/typescript/react" },
        ],
      },
      {
        text: "Nodejs",

        collapsed: true,
        items: [{ text: "fs-extra", link: "/src/node/fs-extra" }],
      },
      {
        text: "Vue2",
        items: [],
      },
      {
        text: "Vue3",
        items: [],
      },
      {
        text: "React",
        items: [],
      },
      {
        text: "Nestjs",
        collapsed: true,
        items: [
          { text: "nestjs基础", link: "/src/nestjs/about" },
          { text: "controller", link: "/src/nestjs/controller" },
          { text: "provider", link: "/src/nestjs/provider" },
          { text: "module", link: "/src/nestjs/module" },
          { text: "nestfactory", link: "/src/nestjs/nestfactory" },
          { text: "middleware", link: "/src/nestjs/middleware" },
          { text: "filter", link: "/src/nestjs/filter" },
          { text: "使用typeorm", link: "/src/nestjs/typeorm" },
          { text: "使用ioredis", link: "/src/nestjs/ioredis" },
          { text: "使用logger", link: "/src/nestjs/logger" },
          { text: "使用config", link: "/src/nestjs/config" },
        ],
      },
      {
        text: "算法",
        collapsed: true,
        items: [
          { text: "基础排序", link: "/src/caculate/base-sort/index.md" },
          { text: "链表", link: "/src/caculate/link-list/index.md" },
          { text: "双向链表", link: "/src/caculate/dobule-link-list/index.md" },
          { text: "树", link: "/src/caculate/tree/index.md" },
          { text: "红黑树", link: "/src/caculate/black-tree/index.md" },
        ],
      },
      {
        text: "Linux",
        collapsed: true,
        items: [
          { text: "linux基本指令", link: "/src/linux/linux-base" },
          { text: "Linux环境脚本", link: "/src/linux/linux-front" },
          { text: "docker基础知识", link: "/src/linux/docker-base" },
          { text: "docker服务部署", link: "/src/linux/docker-server" },
          { text: "docker部署wordpress", link: "/src/linux/docker-wordpress" },
          {
            text: "nginx基础",
            link: "/src/linux/nginx-base",
          },
          {
            text: "shell和定时任务",
            link: "/src/linux/shell-app",
          },
        ],
      },
      {
        text: "其他",
        collapsed: true,
        items: [
          { text: "a-z记忆法", link: "/src/other/english/a-z.md" },
          { text: "五十音对照", link: "/src/other/japan/my-table.md" },
          { text: "文案1", link: "/src/other/wenan/woman/1.md" },
          { text: "文案2", link: "/src/other/wenan/woman/2.md" },
          { text: "文案3", link: "/src/other/wenan/woman/3.md" },
          { text: "文案4", link: "/src/other/wenan/woman/4.md" },
          { text: "文案5", link: "/src/other/wenan/woman/5.md" },
          { text: "人生文案", link: "/src/other/wenan/rensheng/1.md" },
          { text: "人生文案", link: "/src/other/wenan/rensheng/2.md" },
          { text: "英语时态", link: "/src/other/english/times.md" },
          { text: "逻辑错误", link: "/src/other/logic/index.md" },
          { text: "英语背单词", link: "/src/other/english/words-root.md" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/xiuxiumomo/learn-doc/" },
    ],
  },
  outDir: "docs",
  lastUpdated: true,
});
