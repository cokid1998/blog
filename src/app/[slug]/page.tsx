import dayjs from "dayjs";
import styles from "@src/app/[slug]/MDXPost.module.scss";
import { readFileSync } from "fs";
import matter from "gray-matter";
import getPostMetadata from "@src/utils/getPostMetadata";
import Markdown from "markdown-to-jsx";
import { Badge } from "@src/components/ui/badge";
import path from "path";

const getPostContent = (slug: string) => {
  let folder = path.join(process.cwd(), "/posts");
  let file = path.join(folder, `${slug}.md`);
  const content = readFileSync(file, "utf8");
  const result = matter(content);
  return result;
};

export async function generateStaticParams() {
  const posts = getPostMetadata("posts");
  return posts.map((post) => post.slug);
}

// export async function generateMetadata({ params, searchParams }) {
//   const id = params?.slug ? " ⋅ " + params?.slug : "";
//   return {
//     title: `The Bubbly Baker ${id.replaceAll("_", " ")}`,
//   };
// }

async function page({ params }: { params: { slug: string } }) {
  const md = getPostContent(params.slug);
  const posts = getPostMetadata("posts");
  const postMetaData = posts.filter((post) => post.slug === params.slug)[0];

  return (
    <>
      <div className="flex flex-col w-full border-b-2 border-dotted">
        <div className="text-[34px]">{postMetaData.title}</div>
        <div className="flex my-[12px]">
          <div className="w-full flex justify-betweentext-[14px] text-[#4b4e52] opacity-50">
            {dayjs(postMetaData.date).format("YYYY년 MM월 DD일")}
          </div>
          <div className="flex gap-[10px]">
            {postMetaData.tags.map((tag, index) => (
              <Badge key={index} variant={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <Markdown className={styles.md__formatter}>{md.content}</Markdown>
    </>
  );
}

export default page;
