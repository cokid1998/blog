"use client";
import { Search as SearchIcon } from "lucide-react";
import { Dispatch, useState } from "react";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ searchValue, setSearchValue }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <SearchIcon
        size={"20px"}
        className={`absolute left-[14px] top-1/2 transform -translate-y-1/2 ${
          isFocused ? "stroke-[#22C564]" : "stroke-[#8f9295]"
        }`}
      />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="pl-[40px] border-2 w-full h-[50px] rounded-[50px] focus:border-[#22C564] focus:outline-none"
        type="text"
        placeholder="포스트를 검색하세요"
      />
    </div>
  );
};

export default SearchBar;
