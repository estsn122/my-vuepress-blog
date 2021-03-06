module.exports = {
  title: 'yuya@estsn122のWeb技術ブログ',
  description: 'yuya@estsn122のブログです',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    dateFormat: 'YYYY-MM-DD',
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'タグ',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/estsn122',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/estsn122',
        },
      ],
      copyright: [
      ],
    },
  },
}
