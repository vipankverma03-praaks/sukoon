module.exports = {
  siteMetadata: {
    title: `Sukoon`,
    description: `Psychotherapy Center`,
    author: `@Deepak`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sukoon`,
        short_name: `Psychiatry Center`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b7e2c9`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        ignore:["node_modules/slick-carousel/slick/slick-theme.css", "node_modules/slick-carousel/slick/slick.css"],
        purgeOnly: [""]
      }
    }
  ]
};
