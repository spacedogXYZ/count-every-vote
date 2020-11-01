let DEVELOPMENT = process.env.NODE_ENV === `development`
let SITE_URL = DEVELOPMENT ? "http://localhost:8000" : "https://www.votecounts.org"

module.exports ={
  "siteUrl": SITE_URL,
  "postsPerPage": 10,
  "siteTitleMeta": "Count Every Vote",
  "siteDescriptionMeta": "The movement to protect the 2020 Election.",
  "shareImageWidth": 1000,
  "shareImageHeight": 523,
  "shortTitle": "Count Every Vote",
  "siteIcon": "favicon.png",
  "backgroundColor": "#e9e9e9",
  "themeColor": "#15171A",
  "apiUrl": "https://ghost.theasdfghjkl.com",
  "header": {
    "navigation": [
      {
        "label": "About",
        "url": "/about"
      },
      {
        "label": "Articles",
        "url": "/articles"
      },
      {
        "label": "State Guide",
        "url": "/state-guide"
      },
      {
        "label": "Contact",
        "url": "/contact"
      },
      {
        "label": "Subscribe",
        "url": "https://www.getrevue.co/profile/vote"
      }
    ]
  },
  "footer": {
    "copyright": "Count Every Vote",
    "navigation": [
      {
        "label": "Home",
        "url": `${SITE_URL}`
      },
      {
        "label": "Sitemap",
        "url": `${SITE_URL}/sitemap.xml`
      },
      {
        "label": "RSS",
        "url": `${SITE_URL}/rss.xml`
      },
      {
        "label": "Subscribe",
        "url": "https://www.getrevue.co/profile/vote"
      }
    ]
  },
  "subscribeWidget": {
    "visible": false,
    "title": "Subscribe to Vote✔️",
    "helpText": "Get daily updates about voting news and fact-checked content from our team.",
    "successMessage": "Congratulations! You have been subscribed. Check your inbox."
  },
  "socialLinks": {
    "twitter": "https://twitter.com/@everyvote2020",
    "facebook": "",
    "instagram": "",
    "linkedin": "",
    "github": "",
    "whatsapp": "",
    "pinterest": "",
    "youtube": "",
    "dribbble": "",
    "behance": "",
    "externalLink": ""
  },
  "contactWidget": {
    "title": "Contact Vote Counts",
    "successMessage": "We'll get in touch with you soon."
  },
  "metadata": {
    "title": "Count Every Vote",
    "description": "Monitoring and fact-checking voting news."
  },
  "twitterCard": {
    "title": "Count Every Vote",
    "description": "Monitoring and fact-checking voting news.",
    "imageUrl": "twitterImage.png",
    "username": "@votechecked"
  },
  "facebookCard": {
    "title": "Count Every Vote",
    "description": "Protecting the 2020 Election with accurate data for journalists and activists.",
    "imageUrl": "facebookImage.png",
    "appId": "",
    "width": 1000,
    "height": 523
  },
  "siteTitle": "Count Every Vote",
  "siteDescription": "The Movement to Protect the 2020 Election.",
  "language": "en-US",
  "logoUrl": "count_every_vote_black_center.png",
  "iconUrl": "",
  "coverUrl": "cover.png",
  "alternateLogoUrl": "",
  "themeConfig": {
    "useLocalStorage": false,
    "useColorSchemeMediaQuery": false,
    "variables": [
      {
        "varName": "--accent-color",
        "value": "#6166DC"
      },
      {
        "varName": "--success-color",
        "value": "#46B17B"
      },
      {
        "varName": "--accent-color-dark",
        "value": "#E9DAAC"
      },
      {
        "varName": "--success-color-dark",
        "value": "#46B17B"
      },
      {
        "varName": "--merriweather-font",
        "value": "Merriweather"
      },
      {
        "varName": "--merriweather-font-bold",
        "value": "700"
      },
      {
        "varName": "--system-font",
        "value": "system-ui"
      },
      {
        "varName": "--system-font-normal",
        "value": "400"
      },
      {
        "varName": "--system-font-semibold",
        "value": "600"
      },
      {
        "varName": "--system-font-bold",
        "value": "700"
      },
      {
        "varName": "--monospace-font",
        "value": "Source Code Pro"
      },
      {
        "varName": "--monospace-font-normal",
        "value": "400"
      }
    ],
    "fonts": [
      {
        "family": "Merriweather",
        "variants": [
          "700"
        ],
        "fontDisplay": "swap",
        "strategy": "selfHosted"
      },
      {
        "family": "Source Code Pro",
        "variants": [
          "400"
        ],
        "fontDisplay": "swap",
        "strategy": "selfHosted"
      }
    ]
  }
}