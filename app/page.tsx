import { getPosts } from "@/utils/API/getPosts";

export default async function Index() {
  const data = await getPosts();

  if (!data) return null;

  return (
    <div>
      <div>{data[0].title}</div>
      <div>{data[0].content}</div>
    </div>
  );
}
