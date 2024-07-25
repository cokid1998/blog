import PostList from "@src/components/Post/PostList/PostList";
import Search from "@src/components/Common/Header/Search/Search";
import Category from "@src/components/Category/Category";
import { getCategories } from "@src/utils/API/getAllCategories";

export default async function Index() {
  const { categories, error } = await getCategories();
  categories!.unshift({ id: 0, category: "ALL" });
  return (
    <div className="flex flex-col gap-5 w-full pb-[32px] min-h-[calc(100vh-184px)]	">
      <Search />
      <Category categories={categories!} />
      <PostList />
    </div>
  );
}
