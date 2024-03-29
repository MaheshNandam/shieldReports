// if (process.env.STAGING) {
//   require("dotenv").config({
//     path: `.env.${process.env.NODE_ENV}.staging`,
//   })
// } else {
//   require("dotenv").config({
//     path: `.env.${process.env.NODE_ENV}`,
//   })
// }

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ShieldReports",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
