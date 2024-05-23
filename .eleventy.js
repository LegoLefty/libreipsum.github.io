module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/")
    eleventyConfig.addPassthroughCopy("css/")
    eleventyConfig.addPassthroughCopy("js/")

    eleventyConfig.addWatchTarget("css/")
    eleventyConfig.addWatchTarget("js/")
    return {
        dir: {
            includes: "_includes",
            output: "_site",
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
}