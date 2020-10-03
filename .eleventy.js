const ampPlugin = require('@ampproject/eleventy-plugin-amp');

module.exports = function (eleventyConfig) {
  const opts = {
    dir: {
      input: "content",
      // includes: "../components"
    }
  };

  return opts;
};