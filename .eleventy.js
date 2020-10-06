module.exports = function (eleventyConfig) {
  const opts = {
    dir: {
      input: "content",
      includes: "../_includes"
    }
  };

  return opts;
};