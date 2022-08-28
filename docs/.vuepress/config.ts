import { defineUserConfig } from '@vuepress/cli';
import theme from './theme';

const base = (process.env.BASE as '/library' | `/${string}/`) || '/';

export default defineUserConfig({
  base,

  dest: './dist',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'DripVerse Library',
      description: 'A collection of all relevant docs in the DripVerse.',
    },
    // '/zh/': {
    //   lang: 'zh-CN',
    //   title: '主题演示',
    //   description: 'vuepress-theme-hope 的演示',
    // },
  },

  theme,

  shouldPrefetch: false,
});
