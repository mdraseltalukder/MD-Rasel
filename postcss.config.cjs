// postcss.config.cjs
const autoprefixer = require("autoprefixer");
const tailwindcss = require("@tailwindcss/postcss"); // পুরোনো tailwindcss নয়

module.exports = {
  plugins: [tailwindcss, autoprefixer],
};
