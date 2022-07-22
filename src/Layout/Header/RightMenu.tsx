import { AiOutlineHeart } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";

// typescript에서는 props로 받아온 것들의 type을 정의해줘야함
interface PropsType {
  screenWidth: number;
  searchInput: string;
  searchInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchHandler: () => void;
}

function RightMenu({
  screenWidth,
  searchInput,
  searchInputHandler,
  searchHandler,
}: PropsType) {
  return (
    <div className="flex">
      <AiOutlineHeart
        className="mr-2.5 hover:text-red-400 hover:cursor-pointer"
        size="25px"
      />

      {screenWidth >= 1024 ? (
        // 1024px보다 크면 검색 기능을 하는 돋보기 버튼을 보여준다.
        <div className="relative">
          <input
            type="text"
            value={searchInput}
            onChange={searchInputHandler}
            placeholder="검색"
            className="border-2 rounded focus:outline-none focus:border-red-400"
          />
          <button
            type="submit"
            className="absolute right-2 top-1 hover:text-red-400 hover:cursor-pointer"
          >
            <BiSearchAlt2 size="20px" />
          </button>
        </div>
      ) : (
        // 1024px보다 작으면 toggle 기능을 하는 돋보기 버튼을 보여준다
        <BiSearchAlt2
          className="hover:text-red-400 hover:cursor-pointer"
          size="25px"
          onClick={searchHandler}
        />
      )}
    </div>
  );
}

export default RightMenu;
