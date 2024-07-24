import { CategoryType } from "@src/types/categoryType";
import { Badge } from "@src/components/ui/badge";
import { switchBadgeVariants } from "@src/utils/switchBadgeVariants";

interface CategoryProps {
  categories: CategoryType[];
}

function Category({ categories }: CategoryProps) {
  console.log(categories);
  return (
    <div className="flex gap-[16px] px-[16px]">
      {categories.map(({ category, id }) => {
        return (
          <Badge variant={switchBadgeVariants(category)} key={id}>
            {category}
          </Badge>
        );
      })}
    </div>
  );
}

export default Category;
