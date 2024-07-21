import PostList from "@src/components/Post/PostList/PostList";

export default async function Index() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PostList />
    </div>
  );
}
