module.exports = {
  siteMetadata: {
    title: `Farizal.id`,
    author: `Farizal Tri Anugrah`,
    description: `Membahas tentang teknologi dan internet.`,
    siteUrl: `https://farizal.id/`,
    social: {
      twitter: `@omdjin`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              // usePrefix defaults to false
              // usePrefix: true is the same as ["oembed"]
              usePrefix: ['embed', 'video', 'oembed'],
              providers: {
                // Important to exclude providers
                // that adds js to the page.
                // If you do not need them.
                include: ['Instagram'],
                exclude: ['CodePen', 'Flickr', 'Reddit', 'SoundCloud', 'Twitch', 'Twitter', 'Vimeo', 'YouTube'],
                settings: {
                  // Ex. Hide all Instagram comments by default
                  Instagram: { hidecaption: false },
                },
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-108517248-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Farizal.id`,
        short_name: `Farizal.id`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#007acc`,
        display: `standalone`,
        icon: `content/assets/blog-icon.jpg`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 1000,
      },
    },
  ],
};
