import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
// svg 파일을 불러올 때 컴포넌트 형태로 사용하는 방법
// svg 파일의 속성값을 변경하기 위해서는 해당 속성 값을 svg 파일에서 current 값으로 바꿔놔야함
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import HeaderNav from "./HeaderNav";
import RightMenu from "./RightMenu";
import ToggleSearchBar from "./ToggleSearchBar";
import ToggleMenu from "../ToggleMenu/ToggleMenu";

// state, setState가 여러 군데로 전달되고 있기 때문에 각각의 컴포넌트에서 interface를 작성하기 보다는
// 시작되는 부분에서 작성해놓고 export를 해버리자. 필요한 곳에서 import해서 사용하면 된다.
// 그렇게 생각했으나..사용되지 않는 부분까지 포함해서 작성해버리면 오류가 발생한다.
// 같은 props를 사용할 때만 사용해야겠다!!
// export interface PropsType {
//   screenWidth: number;
//   searchInput: string;
//   searchInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   searchHandler: () => void;
// }

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [toggleSearch, setToggleSearch] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const searchHandler = () => {
    setToggleSearch((prev) => !prev);
  };

  const checkInnerWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // useEffect를 통해 화면 크기의 변화를 탐지
  useEffect(() => {
    window.addEventListener("resize", checkInnerWidth);

    return () => {
      window.removeEventListener("resize", checkInnerWidth);
    };
  }, []);

  // 모바일 화면에서 숨겨져 있는 메뉴를 보여주기 위한 state
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuHandler = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <header className="fixed top-0 w-full bg-white border-b-[1px] border-red-100 z-50">
      {toggleMenu ? <ToggleMenu menuHandler={menuHandler} /> : null}

      <div className="flex items-center justify-between p-2 py-0">
        <div className="hover:text-red-400 lg:hidden" onClick={menuHandler}>
          <GiHamburgerMenu size="20px" />
        </div>

        <Link to="/">
          <Logo className="w-20 lg:w-28" />
        </Link>

        <HeaderNav />

        <RightMenu
          screenWidth={screenWidth}
          searchInputHandler={searchInputHandler}
          searchInput={searchInput}
          searchHandler={searchHandler}
        />
      </div>

      {/* 토글을 할 수 있는 버튼이 1024px보다 작을 경우에만 나타나므로 이 컴포넌트도 1024보다 작을 경우에만 사용된다 */}
      {toggleSearch ? (
        <ToggleSearchBar
          searchInputHandler={searchInputHandler}
          searchInput={searchInput}
        />
      ) : null}
    </header>
  );
}

export default Header;
