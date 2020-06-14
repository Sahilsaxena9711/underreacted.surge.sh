/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title1: `Under`,
    title2: `react`,
    title3: `ed`,
    github: `https://github.com/Sahilsaxena9711`,
    twitter: `https://twitter.com/sahil_saxenaJS`,
    npm: `https://www.npmjs.com/~sahilsaxena9711`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Underreacted`,
        short_name: `Underreacted`,
        start_url: `/`,
        background_color: `#282b34`,
        theme_color: `#282b34`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/blogs`,
        name: `blogs`
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
