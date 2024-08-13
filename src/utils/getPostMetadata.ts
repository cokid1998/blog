import { PostPreviewType } from "@src/types/postPreviewType";
import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata(basePath: string) {
  const folder = "./" + basePath;
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  // get the file data
  const posts = markdownPosts.map((filename): PostPreviewType => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      desc: matterResult.data.desc,
      tags: matterResult.data.tags,
      slug: filename.replace(".mdx", ""),
    };
  });
  return posts;
}
