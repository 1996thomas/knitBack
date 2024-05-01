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
            "https://market-assets.strapi.io",
            "*.digitaloceanspaces.com", // This should cover your domain, check for typos or restrictions.
            "https://knitmediaspace.fra1.digitaloceanspaces.com", // Added explicitly
          ],
          "media-src": ["'self'", "data:", "blob:"],
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
