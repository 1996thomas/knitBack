// middlewares/generateSlug.js
module.exports = (strapi) => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        if (
          ctx.request.body &&
          ctx.request.body.data &&
          ctx.request.body.data.title
        ) {
          const slugify = (text) =>
            text
              .toString()
              .toLowerCase()
              .replace(/\s+/g, "-") // Remplace les espaces par des tirets
              .replace(/[^\w\-]+/g, "") // Retire les caractères non alphanumériques
              .replace(/\-\-+/g, "-") // Remplace les multiples tirets par un seul tiret
              .replace(/^-+/, "") // Retire les tirets du début
              .replace(/-+$/, ""); // Retire les tirets de la fin

          ctx.request.body.data.slug = slugify(ctx.request.body.data.title);
        }
        await next();
      });
    },
  };
};
