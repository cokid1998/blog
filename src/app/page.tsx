import PostList from "@src/components/Post/PostList/PostList";
import SearchBar from "@src/components/Common/Header/SearchBar/SearchBar";
import getPostMetadata from "@src/utils/getPostMetadata";

export default async function Index() {
  const postMetadata = getPostMetadata("posts");
  return (
    <div className="flex flex-col gap-5 w-full pb-[32px] min-h-[calc(100vh-184px)]	">
      <PostList posts={postMetadata} />
    </div>
  );
}
