import { Dispatch, SetStateAction } from "react";
import { Separator } from "@src/components/ui/separator";
import { Badge } from "@src/components/ui/badge";

interface TagSelectorProps {
  tags: string[];
  selectTag: string;
  setSelectTag: Dispatch<SetStateAction<string>>;
}

function TagSelector({ tags }: TagSelectorProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-[#22C564] text-[22px] pl-[16px] font-semibold">
        카테고리
      </div>
      <Separator orientation="vertical" className="h-[24px] w-[2px]" />
      {tags.map((tag) => (
        <Badge key={tag} variant={tag}>
          {tag}
        </Badge>
      ))}
    </div>
  );
}

export default TagSelector;
