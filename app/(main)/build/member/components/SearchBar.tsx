import { SearchIcon } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="flex w-[153px] h-5 lg:h-[55px] lg:w-full max-w-md rounded-full overflow-hidden">
            <input
                type="text"
                className="text-[10px] lg:text-sm h-full bg-transparent rounded-l-full border border-gray-300 lg:py-2 px-2 lg:px-4 w-full"
                placeholder="Search here"
            />
            <button className="h-full bg-primary w-8 lg:w-20 flex items-center justify-center">
                <SearchIcon className="text-black w-[11px] lg:w-[31px]" />
            </button>
        </div>
    );
};

export default SearchBar;
