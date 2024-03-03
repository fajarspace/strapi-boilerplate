"use strict";

/**
 * blog router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::blog.blog");

// module.exports = {
//   routes: [
//     {
//       method: "GET",
//       path: "/blog/:slug",
//       handler: "blog.findOne",
//       config: {
//         auth: false,
//       },
//     },
//   ],
// };
