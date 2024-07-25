import React from "react";
import { Badge } from "@src/components/ui/badge";
import { switchCategoryBadgeVariants } from "@src/utils/switchBadgeVariants";
import { useContext } from "react";
import { CategoryContext } from "@src/context/CategoryContext";

interface CategoryItemProps {
  categoryName: string;
}

function CategoryItem({ categoryName }: CategoryItemProps) {
  const { selectCategory, setSelectCategory } = useContext(CategoryContext);

  return (
    <Badge
      onClick={() => setSelectCategory(categoryName)}
      variant={switchCategoryBadgeVariants(
        selectCategory === categoryName ? categoryName : "disable"
      )}
    >
      {categoryName}
    </Badge>
  );
}

export default CategoryItem;
