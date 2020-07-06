require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: "Jennie",
    titleTemplate: "%s · Jennie",
    description:
      "Jennie is probably one of the sexiest and most petite idols right now and this site is photo stock of jennie.",
    url: "https://jenniekim.now.sh/",
    image: "static/snape.jpg",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jennie`,
        short_name: `Jennie`,
        start_url: `/`,
        background_color: `#1A202C`,
        theme_color: `#EFABC0`,
        display: `standalone`,
        icon: `static/icon.png`,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: "any maskable",
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: "any maskable",
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/Photos/`,
      },
    },
    {
      resolve: `gatsby-source-drive`,
      options: {
        folderId: process.env.GOOGLE_DRIVE_FOLDER_ID,
        key: process.env.GOOGLE_KEY,
        serviceAccountEmail: process.env.GOOGLE_SA_EMAIL,
      },
    },
  ],
}
