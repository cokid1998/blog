import dayjs from "dayjs";
import styles from "@src/app/[category]/[id]/MDXPost.module.scss";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

export async function generateStaticParams() {}

interface PostProps {
  id: string;
  category: string;
}

async function page({ params }: { params: PostProps }) {
  const { category, id } = params;

  return (
    <>
      <div>{"a"}</div>
      <div>{id}</div>
      <div>{category}</div>

      {/* <section>{mdx}</section> mardown이 들어가는곳 */}
      <div> {dayjs(new Date()).format("YYYY년 MM월 DD일")}</div>
    </>
  );
}

export default page;
