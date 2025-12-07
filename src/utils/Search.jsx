import { FiSearch } from "react-icons/fi";

const Search = ({ onSearch,bg='', className = "" }) => {
  return (
    <div
      className={`flex items-center bg-base-300 rounded-xl px-4 py-2 w-full max-w-md mx-auto border border-gray-300 focus-within:ring-1 focus-within:ring-primary transition-all duration-200 ${className}`}
    >

      <FiSearch className="text-gray-400 mr-2 h-5 w-5" />
      <input
        type="search"
        placeholder="Search..."
        className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
        onChange={(e) => onSearch?.(e.target.value)}
      />

      <button className="ml-2 px-4 py-1 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 active:scale-95 transition-all duration-200 flex items-center gap-1">
        <FiSearch className="h-4 w-4" />
        Search
      </button>
    </div>
  );
};

export default Search;
