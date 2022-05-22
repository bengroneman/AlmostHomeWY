module.exports = {
  siteMetadata: {
    title: `AlmostHomeWyoming`,
    siteUrl: `https://almosthomewyoming.com`,
  },
  plugins: [
      "gatsby-plugin-postcss",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem',
        options: {
          "name": "images",
          "path": "./src/images/"
        },
        __key: "images"
      }
  ]
};
