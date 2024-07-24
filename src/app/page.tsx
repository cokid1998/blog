import PostList from "@src/components/Post/PostList/PostList";
import Search from "@src/components/Common/Header/Search/Search";
import Category from "@src/components/Category/Category";
import { getCategories } from "@src/utils/API/getCategories";

export default async function Index() {
  const { categories, error } = await getCategories();

  return (
    <div className="flex flex-col gap-5 w-full">
      <Search />
      <Category categories={categories!} />
      <PostList />
    </div>
  );
}
