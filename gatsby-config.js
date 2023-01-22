require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `AlmostHomeWyoming`,
    siteUrl: `https://almosthomewyoming.com`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint:
          "https://api-us-west-2.hygraph.com/v2/clcz5rk8l3uih01t840ju7w9o/master",
      },
    },
  ],
};
