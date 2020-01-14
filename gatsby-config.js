module.exports = {
  siteMetadata: {
    title: `dyss.net`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dyss.net`,
        short_name: `dyss`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/dyss-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`400`, `400i`, `700`, `700i`],
          },
          {
            family: `Roboto`,
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700i`],
          },
          {
            family: `Open Sans`,
            subsets: [`latin`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
