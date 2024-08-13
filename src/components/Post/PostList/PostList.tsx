import getPostMetadata from "@src/utils/getPostMetadata";
import PostItem from "@src/components/Post/PostItem/PostItem";

const PostList = () => {
  const postMetadata = getPostMetadata("posts");
  return (
    <>
      {postMetadata.map((post) => (
        <PostItem post={post} />
      ))}
    </>
  );
};

export default PostList;
