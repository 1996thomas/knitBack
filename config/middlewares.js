module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://knitmediaspace.fra1.digitaloceanspaces.com",
            "https://market-assets.strapi.io",
            ".digitaloceanspaces.com",
            "https://knit-back-jds8b.ondigitalocean.",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://knitmediaspace.fra1.digitaloceanspaces.com",
            "https://market-assets.strapi.io",
            "https://knit-back-jds8b.ondigitalocean.",
          ],

          upgradeInsecureRequests: null,
        },
      },
      origin: [
        "http://localhost:1337",
        "http://localhost:5173",
        "https://knit-back-jds8b.ondigitalocean.app",
      ],
      headers: "*",
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
