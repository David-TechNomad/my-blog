module.exports = {
  title: "杜世宏 Blog",
  description: "This is my blog built by VuePress",
  theme: "@vuepress/theme-blog", // OR shortcut: @vuepress/blog
  base: "/my-blog/",
  lastUpdated: 'Last Updated', // string | boolean
  plugins: [
    [
      ("@vuepress/active-header-links",
      {
        sidebarLinkSelector: ".sidebar-link",
        headerAnchorSelector: ".header-anchor",
      }),
    ],
    ["@vuepress/back-to-top"],
  ],
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions;
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: "Introduction",
        link: "/Introduction",
      },
      {
        text: "PastBlog",
        link: "https://dsh225.github.io/past-blog/",
      },
      {
        text: "Blog",
        link: "/",
      },
      {
        text: "Tags",
        link: "/tag/",
      },
      {
        text: "GitHub",
        link: "https://github.com/dsh225",
      },
    ],
    sidebar: "auto",
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/dsh225",
        },
        // {
        //   type: 'twitter',
        //   link: 'https://twitter.com/_ulivz'
        // }
      ],
      copyright: [
        // {
        //   text: 'Privacy Policy',
        //   link: 'https://policies.google.com/privacy?hl=en-US'
        // },
        {
          text: "MIT Licensed | Copyright © 2018-present Vue.js",
          link: "",
        },
      ],
    },
  },
};
