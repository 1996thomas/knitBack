// module.exports = [
//   "strapi::logger",
//   "strapi::errors",
//   "strapi::security",
//   {
//     name: "strapi::cors",
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           "connect-src": ["'self'", "https:"],
//           "img-src": ["*", "data:", "blob:"],
//           "media-src": ["*", "data:", "blob:"],
//           upgradeInsecureRequests: null,
//         },
//       },
//       origin: [
//         "*",
//         "http://localhost:1337",
//         "http://localhost:5173",
//         "https://knit-back-jds8b.ondigitalocean.app",
//       ],
//       headers: "*",
//     },
//   },
//   "strapi::poweredBy",
//   "strapi::query",
//   "strapi::body",
//   "strapi::session",
//   "strapi::favicon",
//   "strapi::public",
// ];
// module.exports = [
//   "strapi::logger",
//   "strapi::errors",
//   "strapi::security",
//   {
//     name: "strapi::cors",
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           "connect-src": ["'self'", "https:"],
//           "img-src": ["*", "data:", "blob:"],
//           "media-src": ["*", "data:", "blob:"],
//           upgradeInsecureRequests: null,
//         },
//       },
//       origin: [
//         "*",
//         "http://localhost:1337",
//         "http://localhost:5173",
//         "https://knit-back-jds8b.ondigitalocean.app",
//       ],
//       headers: "*",
//     },
//   },
//   "strapi::poweredBy",
//   "strapi::query",
//   "strapi::body",
//   "strapi::session",
//   "strapi::favicon",
//   "strapi::public",
// ];
module.exports = [
  "strapi::errors",
  "strapi::logger",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "*.digitaloceanspaces.com"],
          "media-src": ["'self'", "data:", "blob:"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        "*",
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
