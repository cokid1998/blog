import { getAllPost } from "@src/utils/API/getAllPost";
import { getPostByTitle } from "@src/utils/API/getPostByTitle";
import dayjs from "dayjs";

export async function generateStaticParams() {
  const { data: posts, error } = await getAllPost();

  if (error) {
    console.error(error);
    return [];
  }
  console.log(posts);
  return posts!.map(({ title, category }) => ({
    category,
    title,
  }));
}
interface PostProps {
  id: string;
  title: string;
}
async function page({ params }: { params: PostProps }) {
  const { title, id } = params;
  const { data, error } = await getPostByTitle(decodeURIComponent(title));
  const { category, content, created_at } = data!;
  return (
    <>
      <div>{decodeURIComponent(title)}</div>
      <div>{id}</div>
      <div>{category}</div>
      <div>{content}</div>
      <div> {dayjs(created_at).format("YYYY년 MM월 DD일")}</div>
    </>
  );
}

export default page;
