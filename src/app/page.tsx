import { getPosts } from "@src/utils/API/getPosts";
import PostCard from "@src/components/PostCard/PostCard";

export default async function Index() {
  const data = await getPosts();

  if (!data) return null;
  return (
    <div className="flex flex-col gap-5">
      {data.map((post) => {
        return <PostCard post={post} />;
      })}
    </div>
  );
}
