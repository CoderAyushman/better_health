"use server";
import { remark } from "remark";
import html from "remark-html";
import { rehype } from "rehype";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(markdown: any) {
  // Convert Markdown to HTML using remark
  const processedContent = await remark().use(html).process(markdown);
  const contentHtml = processedContent.toString();

  // Further process the HTML with rehype if needed
  const processedHtml = await rehype()
    .use(rehypeParse)
    .use(rehypeStringify)
    .process(contentHtml);

  return processedHtml.toString();
}
