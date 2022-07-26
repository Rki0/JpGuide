import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";

interface PropsType {
  menuHandler: () => void;
}

// 이런 식으로 배열 안에 객체를 선언해서 map으로 표현하는게 훨씬 깔끔한데
// typescript에서 type 설정을 어떻게 해야하는지 모르겠다...!
// const menuArr = [{ title: "여행지", clickEvent: "detailMenu1Handler" }];

function ToggleMenu({ menuHandler }: PropsType) {
  // 메뉴 오픈 시 스크롤 기능 제한
  // 단, 메뉴 자체도 스크롤이 막혀버리므로, nav 쪽에 overflow : scroll 설정을 해주자
  useEffect(() => {
    document.body.style.cssText = "overflow: hidden";

    return () => {
      document.body.style.cssText = "overflow: auto";
    };
  }, []);

  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [menu4, setMenu4] = useState(false);

  const detailMenu1Handler = () => {
    setMenu1((prev) => !prev);
  };

  const detailMenu2Handler = () => {
    setMenu2((prev) => !prev);
  };

  const detailMenu3Handler = () => {
    setMenu3((prev) => !prev);
  };

  const detailMenu4Handler = () => {
    setMenu4((prev) => !prev);
  };

  return (
    <div className="absolute top-0 z-50 flex w-screen h-screen">
      <nav className="relative w-4/5 h-full overflow-scroll bg-white">
        {/* 각각의 메뉴에 대하여 어떤게 클릭되었는지에 따라 출력되는 것이 다르므로, 하나의 state로 처리하기가 곤란함 */}
        {/* 따라서 각각의 메뉴를 전부 다른 state로 설정하고 setState를 진행함 */}
        {/* 그래서 기본 메뉴를 숨길 때 따로따로 처리해야함. or을 사용해서 처리했다 */}
        <ul
          className={
            menu1
              ? "hidden"
              : "" || menu2
              ? "hidden"
              : "" || menu3
              ? "hidden"
              : "" || menu4
              ? "hidden"
              : ""
          }
        >
          <li className="relative flex items-center h-12 border-b-2">
            <a href="/" className="w-full p-3 font-bold">
              HOME
            </a>

            <button className="absolute right-3" onClick={menuHandler}>
              <AiOutlineClose />
            </button>
          </li>

          <li className="h-12 font-bold border-b-2">
            <button
              className="relative flex items-center justify-between w-full p-3"
              onClick={detailMenu1Handler}
            >
              여행지
              <AiOutlineRight />
            </button>
          </li>

          <li className="h-12 font-bold border-b-2">
            <button
              className="relative flex items-center justify-between w-full p-3"
              onClick={detailMenu2Handler}
            >
              즐길 거리
              <AiOutlineRight />
            </button>
          </li>

          <li className="h-12 font-bold border-b-2">
            <button
              className="relative flex items-center justify-between w-full p-3"
              onClick={detailMenu3Handler}
            >
              여행 계획하기
              <AiOutlineRight />
            </button>
          </li>

          <li className="h-12 font-bold border-b-2">
            <button
              className="relative flex items-center justify-between w-full p-3"
              onClick={detailMenu4Handler}
            >
              최신 뉴스
              <AiOutlineRight />
            </button>
          </li>
        </ul>

        {/* 여행지 메뉴를 클릭했을 때 나오는 추가 메뉴 */}
        {/* 여행지 메뉴를 클릭하면, 이 메뉴의 hidden을 해제 */}
        {/* 이 메뉴의 Back을 누르면, 이 메뉴를 다시 hidden */}
        {menu1 ? <Menu1 detailMenu1Handler={detailMenu1Handler} /> : null}
        {menu2 ? <Menu2 detailMenu2Handler={detailMenu2Handler} /> : null}
        {menu3 ? <Menu3 detailMenu3Handler={detailMenu3Handler} /> : null}
        {menu4 ? <Menu4 detailMenu4Handler={detailMenu4Handler} /> : null}
      </nav>

      {/* 메뉴 밖 검은 화면을 클릭해도 메뉴가 닫히도록 설정 */}
      {/* 이 기능을 쉽게 구현하기 위해서는 메뉴와 검은 화면로 화면을 나눈 뒤 시작하자 */}
      <div className="w-1/5 h-full bg-[rgba(0,0,0,0.7)]" onClick={menuHandler}>
        검은 화면
      </div>
    </div>
  );
}

export default ToggleMenu;
