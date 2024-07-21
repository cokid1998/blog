import { getAllPost } from "@src/utils/API/getAllPost";
import { getPostById } from "@src/utils/API/getPostById";
import dayjs from "dayjs";

export async function generateStaticParams() {
  const { data: posts, error } = await getAllPost();

  if (error) {
    console.error(error);
    return [];
  }

  return posts!.map(({ id, category }) => ({
    category,
    id: id.toString(),
  }));
}

interface PostProps {
  id: string;
  category: string;
}

async function page({ params }: { params: PostProps }) {
  const { category, id } = params;
  const { data, error } = await getPostById(id);
  const { content, created_at, title } = data!;

  return (
    <>
      <div>{title}</div>
      <div>{id}</div>
      <div>{category}</div>
      <div>{content}</div>
      <div> {dayjs(created_at).format("YYYY년 MM월 DD일")}</div>
    </>
  );
}

export default page;
