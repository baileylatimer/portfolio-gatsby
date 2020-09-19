require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Latimer Design`,
    name: `Bailey Latimer`,
    siteUrl: `https://novela.narative.co`,
    description: `Latimer Design is a branding and web development company based in Cincinnati. Fiercely committed to differentiation and success, we build brands for startups that are challenging what is and creating what's next.`,
    hero: {
      heading: `I'm Bailey 👋 <br> A UI/UX and Product Designer in Cincinnati.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/latimer2k`,
      },
      {
        name: `github`,
        url: `https://github.com/baileylatimer`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/latimer2k`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/baileylatimer`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/latimerdesign`,
      },
    ],
  },
  plugins: [
    {

      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
         // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};

