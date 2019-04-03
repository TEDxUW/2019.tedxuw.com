module.exports = {
  siteMetadata: {
    title: `TEDxUW`,
    siteUrl: `https://www.tedxuw.com`,
    description: `The University of Waterloo's annual TEDx conference.`,
  },
  plugins: [
    { resolve: `gatsby-plugin-react-helmet` },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "~src": "src",
          "~components": "src/components",
          "~pages": "src/pages",
          "~static": "src/static",
          "~utils": "src/utils",
        },
        extensions: ["js", "jsx"],
      },
    },
  ],
};
