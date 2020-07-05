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
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-dark-mode`,
  ],
}
