const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);
  eleventyConfig.addPassthroughCopy({ "src/assets/_favicon_.ico": "/assets/favicon.ico" });
  eleventyConfig.addFilter("dateFull", (d) => {
    if (!d) return "";
    const dt = new Date(d);
    if (isNaN(dt)) return "";
    return dt.toLocaleString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
  });
  eleventyConfig.addCollection("projects", (api) => {
    return api
      .getFilteredByGlob("src/content/projects/*.md")
      .sort((a, b) => (b.date || 0) - (a.date || 0));
  });
  eleventyConfig.addCollection("blog", (api) => {
    return api
      .getFilteredByGlob("src/content/blog/*.md")
      .sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addCollection("latestProjects", (api) => {
    return api
      .getFilteredByGlob("src/content/projects/*.md")
      .sort((a, b) => (b.date || 0) - (a.date || 0))
      .slice(0, 3);
  });
  eleventyConfig.addCollection("latestBlog", (api) => {
    return api
      .getFilteredByGlob("src/content/blog/*.md")
      .sort((a, b) => b.date - a.date)
      .slice(0, 3);
  });
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
    },
  };
};
