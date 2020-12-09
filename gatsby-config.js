/* eslint-disable */

module.exports = {
  siteMetadata: {
    title: 'Devzera',
    siteUrl: 'https://devzera.com.br',
    description: 'Aprendendo e compartilhando tecnologia',
    author: '@allangrds',
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'aaaaaaaaaaaa',
      },
    },
    'gatsby-plugin-image',
    {
      options: {
        postCssPlugins: [
          require('postcss-preset-env')({ stage: 0 }),
          require('postcss-nested'),
        ],
      },
      resolve: 'gatsby-plugin-postcss',
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Roboto',
          ],
        },
      },
    },
  ],
}
