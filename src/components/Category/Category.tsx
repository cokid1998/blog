"use client";
import { CategoryType } from "@src/types/categoryType";
import CategoryItem from "@src/components/Category/CategoryItem";

interface CategoryProps {
  categories: CategoryType[];
}

function Category({ categories }: CategoryProps) {
  return (
    <div className="flex gap-[16px] px-[16px]">
      {categories.map(({ category, id }) => {
        console.log(categories);
        return <CategoryItem key={id} categoryName={category} />;
      })}
    </div>
  );
}

export default Category;
