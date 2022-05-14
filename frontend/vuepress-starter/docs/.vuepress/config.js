module.exports = {
  title: 'VuePresstest',
  description: 'TestBlog',
  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },
  head: [
    ['link', { href: '/css/style.css', rel: 'stylesheet' }]
  ],
  // Theme to use
  theme: 'meteorlxy',
  themeConfig: {
    lang: 'ja-JP',
    personalInfo: {
      // Nickname
      nickname: 'Test',
      description: 'Test',
      email: 'test@test.com',
      avatar: 'https://cdn.pixabay.com/photo/2022/05/07/20/22/flowers-7180947_1280.jpg',
      sns: {
        github: {
          account: 'test',
          link: 'https://github.com/',
        },
        facebook: {
          account: 'test',
          link: 'https://www.facebook.com/',
        },
        twitter: {
          account: 'test',
          link: 'https://twitter.com/',
        },
      },
    },

    header: {
      background: {
        useGeo: true,
      },
      showTitle: true,
    },

    footer: {
      poweredBy: true,
      poweredByTheme: true,
    },

    infoCard: {
      headerBackground: {
        useGeo: true,
      },
    },

    lastUpdated: false,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
    ],

    comments: false,

    pagination: {
      perPage: 5,
    },

    defaultPages: {
      home: true,
      posts: true,
    },

  },
}