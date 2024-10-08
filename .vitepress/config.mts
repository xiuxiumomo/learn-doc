import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xiuxiumomo学习日常",
  description: "一个学习仓库",
  themeConfig: {
   
    nav: [
      { text: '首页', link: '/' },
      { text: '快速学习', link: '/markdown-examples' }
    ],

    sidebar: [
   
      {
        text: 'javascript基础',
        collapsed:true,
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
        items: [
          { text: '类型系统', link: '/src/typescript/类型系统' },
          { text: '数组', link: '/src/typescript/数组' },
          { text: '元组', link: '/src/typescript/元组' },
          { text: 'symbol类型', link: '/src/typescript/symbol类型' },
          { text: '函数', link: '/src/typescript/函数' },
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
