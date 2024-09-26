import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xiuxiumomo学习日常",
  description: "一个学习仓库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'javascript',
        items: [
          { text: '基础知识', link: '/src/javascript/base' },
          { text: 'oop基础知识', link: '/src/javascript/oop' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiuxiumomo/learn-doc' }
    ]
  }
})
