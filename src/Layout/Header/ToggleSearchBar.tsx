import { BiSearchAlt2 } from "react-icons/bi";

interface PropsType {
  searchInput: string;
  searchInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ToggleSearchBar({ searchInput, searchInputHandler }: PropsType) {
  return (
    <div className="block lg:hidden">
      <form className="relative flex justify-center">
        <input
          type="text"
          value={searchInput}
          onChange={searchInputHandler}
          placeholder="검색"
          className="border-2 rounded w-[97.5%]"
        />
        <button
          type="submit"
          className="absolute top-1.5 right-5 hover:text-red-400 hover:cursor-pointer"
        >
          <BiSearchAlt2 />
        </button>
      </form>
    </div>
  );
}

export default ToggleSearchBar;
