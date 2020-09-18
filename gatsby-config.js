module.exports = {
  siteMetadata: {
    title: `Novela by Narative`,
    name: `Narative`,
    siteUrl: `https://novela.narative.co`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Bailey is a designer who codes.`,
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
