import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Python 小白入门",
  description: "面向零基础的 Python 编程入门课程",
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap', rel: 'stylesheet' }]
  ],

  themeConfig: {
    logo: '/python-logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '入门指南', link: '/guide/introduction' },
      // { text: '基础语法', link: '/basics/variables' },
      // { text: '实战练习', link: '/practice/exercises' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '🚀 入门指南',
          items: [
            { text: '什么是 Python？', link: '/guide/introduction' },
            { text: '安装 Python', link: '/guide/installation' },
          ]
        }
      ],
      '/basics/': [
        {
          text: '📚 基础语法',
          items: [
            { text: '变量与数据类型', link: '/basics/variables' },
            { text: '运算符', link: '/basics/operators' },
            { text: '条件判断', link: '/basics/conditions' },
            { text: '循环', link: '/basics/loops' },
            { text: '函数', link: '/basics/functions' },
            { text: '列表与字典', link: '/basics/collections' }
          ]
        }
      ],
      '/practice/': [
        {
          text: '💪 实战练习',
          items: [
            { text: '练习题集', link: '/practice/exercises' },
            { text: '小项目：猜数字游戏', link: '/practice/guess-number' },
            { text: '小项目：简单计算器', link: '/practice/calculator' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    footer: {
      message: '用 ❤️ 制作的 Python 入门课程',
      copyright: 'Copyright © 2025'
    },

    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    }
  }
})

