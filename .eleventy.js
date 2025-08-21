const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

  // Date format filter (YYYY-MM-DD)
  eleventyConfig.addFilter("ymd", (d) => {
    if (!d) return "";
    const dt = new Date(d);
    if (isNaN(dt)) return "";
    return dt.toISOString().slice(0, 10);
  });

  // Date format filter (Month DD, YYYY)
  eleventyConfig.addFilter("dateFull", (d) => {
    if (!d) return "";
    const dt = new Date(d);
    if (isNaN(dt)) return "";
    const month = dt.toLocaleString("en-US", { month: "long" });
    const day = String(dt.getDate()).padStart(2, "0");
    const year = dt.getFullYear();
    return `${month} ${day}, ${year}`;
  });

  // Copy assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Base collections
  eleventyConfig.addCollection("projects", (api) => {
    return api
      .getFilteredByGlob("src/content/projects/*.md")
      .sort((a, b) => (b.date || 0) - (a.date || 0));
  });

  eleventyConfig.addCollection("blog", (api) => {
    // Sort blog by date descending (newest first)
    return api
      .getFilteredByGlob("src/content/blog/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Limited collections (max 3)
  eleventyConfig.addCollection("latestProjects", (api) => {
    return api
      .getFilteredByGlob("src/content/projects/*.md")
      .sort((a, b) => (b.date || 0) - (a.date || 0)) // if you later add dates to projects
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
