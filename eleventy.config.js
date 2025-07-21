import { RenderPlugin } from "@11ty/eleventy";
import MarkdownItDiv from "markdown-it-div";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("pdf");
  eleventyConfig.addPassthroughCopy("css/style.css");
  eleventyConfig.addPlugin(RenderPlugin);
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(MarkdownItDiv));
}
