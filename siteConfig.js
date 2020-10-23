let DEVELOPMENT = process.env.NODE_ENV === `development`
let SITE_URL = DEVELOPMENT ? "http://localhost:8000" : "https://count-every-vote.netlify.app"

module.exports ={
  "siteUrl": SITE_URL,
  "postsPerPage": 10,
  "siteTitleMeta": "Count Every Vote✔️",
  "siteDescriptionMeta": "Monitoring and fact-checking voting news.",
  "shareImageWidth": 1000,
  "shareImageHeight": 523,
  "shortTitle": "Vote✔️Counts",
  "siteIcon": "favicon.png",
  "backgroundColor": "#e9e9e9",
  "themeColor": "#15171A",
  "apiUrl": "https://ghost.theasdfghjkl.com",
  "header": {
    "navigation": [
      {
        "label": "Register to Vote",
        "url": "https://www.voteamerica.com/"
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
    "copyright": "Count Every Vote✔️",
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
    "title": "Contact Vote✔️",
    "successMessage": "We'll get in touch with you soon."
  },
  "metadata": {
    "title": "Count Every Vote✔️",
    "description": "Monitoring and fact-checking voting news."
  },
  "twitterCard": {
    "title": "Count Every Vote✔️",
    "description": "Monitoring and fact-checking voting news.",
    "imageUrl": "twitterImage.png",
    "username": "@votechecked"
  },
  "facebookCard": {
    "title": "Count Every Vote✔️",
    "description": "Monitoring and fact-checking voting news.",
    "imageUrl": "facebookImage.png",
    "appId": "",
    "width": 1000,
    "height": 523
  },
  "siteTitle": "Count Every Vote✔️",
  "siteDescription": "Monitoring and fact-checking voting news.",
  "language": "en-US",
  "logoUrl": "count_every_vote_black_center.png",
  "iconUrl": "https://draftbox-prod.s3.amazonaws.com/users/5f6e1cfbbe93ff001f420506/images/5f6e1dc8be93ff001f420508/icon.png",
  "coverUrl": "cover.png",
  "alternateLogoUrl": "",
  "themeConfig": {
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