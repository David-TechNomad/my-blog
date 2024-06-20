module.exports = {
  title: "杜世宏 Blog",
  description: "This is my blog built by VuePress",
  theme: "@vuepress/theme-blog", // OR shortcut: @vuepress/blog
  base: "/my-blog/",
  head: [
    [
      "script",
      {},
      `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?c18f0390072d97e3a5e6ce62efda4953";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
          })();        
        </script>                
      `,
    ],
  ],
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp) => {
          return new Date(timestamp).toISOString();
        },
      },
    ],
    [
      ("@vuepress/active-header-links",
      {
        sidebarLinkSelector: ".sidebar-link",
        headerAnchorSelector: ".header-anchor",
      }),
    ],
    ["@vuepress/back-to-top"],
    [
      "@vssue/vuepress-plugin-vssue",
      {
        platform: "github",
        owner: "David-TechNomad",
        repo: "my-blog",
        clientId: "ce75617c40bc6b11a21e",
        clientSecret: "ddedcc066c328cc68ddc5322b5fb34acfd3a29b9",
      },
    ],
    ["cursor-effects"],
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
        link: "https://David-TechNomad.github.io/past-blog/",
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
        link: "https://github.com/David-TechNomad",
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
          link: "https://github.com/David-TechNomad",
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
          text: "MIT Licensed | Copyright © 2018-present",
          link: "https://choosealicense.com/licenses/mit/",
        },
      ],
    },
  },
};
