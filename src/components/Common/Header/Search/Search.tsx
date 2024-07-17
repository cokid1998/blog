import { Search as SearchIcon } from "lucide-react";
const Search = () => {
  return (
    <button
      type="button"
      className="hidden sm:flex items-center w-96 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700 absolute m-auto left-0 right-0"
    >
      <SearchIcon />
      <span className="flex-auto">Quick search...</span>
      <div className="font-sans font-semibold dark:text-slate-500">
        <abbr
          title="Command"
          className="no-underline text-slate-300 dark:text-slate-500"
        >
          ⌘
        </abbr>{" "}
        K
      </div>
    </button>
  );
};

export default Search;
