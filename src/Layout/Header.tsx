import React from "react";
import { Outlet, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
// svg 파일을 불러올 때 컴포넌트 형태로 사용하는 방법
// svg 파일의 속성값을 변경하기 위해서는 해당 속성 값을 svg 파일에서 current 값으로 바꿔놔야함
import { ReactComponent as Logo } from "../assets/images/logo.svg";

function Header() {
  return (
    <div>
      <header className="flex justify-between items-center p-2 pt-0">
        <div>
          <GiHamburgerMenu />
        </div>

        <Link to="/">
          <Logo width="76px" height="38px" />
        </Link>

        <div className="flex">
          <AiOutlineHeart className="mr-2.5" />
          <BiSearchAlt2 />
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default Header;
