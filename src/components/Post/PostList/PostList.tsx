import { getPosts } from "@src/utils/API/getPosts";
import PostItem from "@src/components/Post/PostItem/PostItem";

const PostList = async () => {
  const data = await getPosts();

  if (!data) return null;

  return (
    <>
      {data.map((post) => {
        return <PostItem post={post} />;
      })}
    </>
  );
};

export default PostList;
