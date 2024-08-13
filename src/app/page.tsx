import PostList from "@src/components/Post/PostList/PostList";
import Search from "@src/components/Common/Header/Search/Search";

export default async function Index() {
  return (
    <div className="flex flex-col gap-5 w-full pb-[32px] min-h-[calc(100vh-184px)]	">
      <Search />

      <PostList />
    </div>
  );
}
