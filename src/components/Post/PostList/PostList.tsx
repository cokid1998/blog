import { getAllPost } from "@src/utils/API/getAllPost";
import PostItem from "@src/components/Post/PostItem/PostItem";

const PostList = async () => {
  const { data } = await getAllPost();

  if (!data) return null;

  return (
    <>
      {data.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </>
  );
};

export default PostList;
