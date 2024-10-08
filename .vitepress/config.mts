/*
 * @Author: xiuxiumomo 
 * @Date: 2024-10-08 15:44:22 
 * @Last Modified by: xiuxiumomo
 * @Last Modified time: 2024-10-08 15:55:12
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xiuxiumomo学习日常",
  description: "一个学习仓库",
  themeConfig: {
   
    nav: [
      { text: '首页', link: '/' },
      { text: '快速学习', link: '/' }
    ],

    sidebar: [
   
      {
        text: 'javascript基础',
        collapsed:false,
        items: [
          { text: '数据类型', link: '/src/javascript/base' },
          { text: '错误处理', link: '/src/javascript/error' },
          { text: '循环和遍历', link: '/src/javascript/for' },
          { text: '函数', link: '/src/javascript/function' },
          { text: '表达式', link: '/src/javascript/my-expression' },
          { text: '数学', link: '/src/javascript/math' },
          { text: '时间对象', link: '/src/javascript/time' },
          { text: '字符串', link: '/src/javascript/string' },
          { text: '正则', link: '/src/javascript/reg' },
          { text: '数组', link: '/src/javascript/arrs' },
          { text: '对象', link: '/src/javascript/object' },
          { text: 'map和set结构', link: '/src/javascript/map-set' },
          { text: '面向对象', link: '/src/javascript/oop' },
          { text: '相等', link: '/src/javascript/equal' },
          { text: '事件', link: '/src/javascript/events' },
          { text: '高阶函数', link: '/src/javascript/high-function' },
      
          { text: '原型链', link: '/src/javascript/prototype/prototype' },
          { text: 'ES6-1', link: '/src/javascript/ES6-1' },
          { text: 'ES6-2', link: '/src/javascript/ES6-2' },
          { text: 'ES6-3', link: '/src/javascript/ES6-3' },
          { text: 'ES6-4', link: '/src/javascript/ES6-4' },
          { text: 'ES6-5', link: '/src/javascript/ES6-5' },
          { text: 'ES6-6', link: '/src/javascript/ES6-6' },
        ]
      },
      {
        text: 'Typescript基础',
        collapsed:true,
        items: [
          { text: '简介', link: '/src/typescript/intro' },
          { text: '基本用法', link: '/src/typescript/basic' },
          { text: 'any类型', link: '/src/typescript/any' },

          { text: '类型系统', link: '/src/typescript/types' },
          { text: '数组', link: '/src/typescript/array' },
          { text: '元组', link: '/src/typescript/tuple' },
          { text: 'symbol类型', link: '/src/typescript/symbol' },
          { text: '函数', link: '/src/typescript/function' },


          { text: '对象', link: '/src/typescript/object' },
          { text: 'interface', link: '/src/typescript/interface' },
          { text: '类', link: '/src/typescript/class' },
          { text: '泛型', link: '/src/typescript/generics' },
          { text: 'Enum 类型', link: '/src/typescript/enum' },
          { text: '类型断言', link: '/src/typescript/assert' },
          { text: '模块', link: '/src/typescript/module' },
          { text: 'namespace', link: '/src/typescript/namespace' },
          { text: '装饰器', link: '/src/typescript/decorator' },
          { text: '装饰器（旧语法）', link: '/src/typescript/decorator-legacy' },
          { text: 'declare 关键字', link: '/src/typescript/declare' },
          { text: 'd.ts 类型声明文件', link: '/src/typescript/dts' },
          { text: '运算符', link: '/src/typescript/operator' },
          { text: '类型映射', link: '/src/typescript/mapping' },
          { text: '类型工具', link: '/src/typescript/utility' },
          { text: '注释指令', link: '/src/typescript/comment' },
          { text: 'tsconfig.json 文件', link: '/src/typescript/tsconfig.json.md' },
          { text: 'tsc 命令', link: '/src/typescript/tsc' },
          { text: 'React 支持', link: '/src/typescript/react' },
        ]
      },
      {
        text: 'Nodejs',
        items: []
      },
      {
        text: 'Vue2专栏',
        items: []
      },
      {
        text: 'Vue3专栏',
        items: []
      },
      {
        text: 'React',
        items: []
      },
      {
        text: '其他',
        items: []
      },
     
    ],

    socialLinks: [
      { icon: 'github', link: 'https://xiuxiumomo.github.io/learn-doc/' }
    ]
  },
  outDir: "docs",
  base: "/learn-doc/",
  lastUpdated: true
  
})
