import { load } from "js-yaml";

export default function (eleventyConfig) {
  // Data formats
  eleventyConfig.addDataExtension("yml, yaml", (contents) => load(contents));

  // Copy a whole folder
  eleventyConfig.addPassthroughCopy("src/assets/images");

  // Copy individual files
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/site-featured.jpg");

  // Liquid
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,  // allows unquoted filenames
    jekyllInclude: true      // enables the include.param syntax
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
}