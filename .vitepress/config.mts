import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "BellsScan",
  description: "The first meta-universe protocol is based on the OP_CAT opcode.",
  head: [
    ['link', 
      { 
        rel: 'icon', 
        href: '/nook.png' 
      }
    ]
  ],
  vite:{
    server:{
      port: 5177,
    }
  },
  themeConfig: {
    logo: '/nook.png',
    darkModeSwitchLabel: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/introduction' }
    ],
    sidebar: [
      {
        text: 'introduction',
        link: '/introduction'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bellsscan' },
      { icon: 'x', link: 'https://x.com/bellsscan' },
      { icon: 'discord', link: 'https://discord.com/invite/wXUXhkRQts' }           
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present cat420.com'
    }
  }
})
