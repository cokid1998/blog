"use client";
import { CategoryType } from "@src/types/categoryType";
import CategoryItem from "@src/components/Category/CategoryItem";
import { Separator } from "@src/components/ui/separator";

interface CategoryProps {
  categories: CategoryType[];
}

function Category({ categories }: CategoryProps) {
  return (
    <div className="flex gap-[16px] px-[16px] items-center">
      <div className="text-[18px] text-[#22C564] font-bold">카테고리</div>
      <Separator orientation={"vertical"} className="h-[20px] w-[2px]" />
      {categories.map(({ category, id }) => {
        return <CategoryItem key={id} categoryName={category} />;
      })}
    </div>
  );
}

export default Category;
