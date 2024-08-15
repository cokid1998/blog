import PostList from "@src/components/Post/PostList/PostList";
import getPostMetadata from "@src/utils/getPostMetadata";

export default async function Index() {
  const postMetadata = getPostMetadata("posts");
  // 해더 완성(다크모드같은거)
  // 포스트디테일 페이지 metadata추가
  // 검색성능 향상 (소문자, 대문자 상관없게)
  // 카테고리 넣기
  // 인덱스 페이지 100vh 적용하기 (footer안보이게)

  return (
    <div className="flex flex-col gap-5 w-full pb-[32px] min-h-[calc(100vh-184px)]	">
      <PostList posts={postMetadata} />
    </div>
  );
}
