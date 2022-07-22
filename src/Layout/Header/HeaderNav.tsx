import React from "react";

// const navArr: string[] = ["여행지", "즐길 거리", "여행 계획하기", "최신 뉴스"];

function HeaderNav() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex font-bold">
        {/* li에 hover:border를 해버리면 메뉴가 들썩거리는 현상 발생. 아무래도 border가 공간을 차지하다보니 그런 것 같다 */}
        {/* 따라서, 가상 클래스 after를 사용함으로써 UX 향상 */}
        {/* <li className="hover:border-b-2 hover:border-red-400 hover:cursor-pointer"> */}

        <li className="relative h-14 group">
          <a
            href="/"
            className="flex items-center justify-center h-full p-1 text-center w-28 hover:border-b-2 hover:border-red-400"
          >
            여행지
          </a>

          {/* 드롭다운 메뉴 */}
          {/* nav가 li 안에 만들어져있다보니까 w-screen을 사용해도 해당 위치부터만 전부 채움 */}
          {/* absolute와 left를 활용해서 window.innerWidth에서 컴포넌트의 width값만큼을 빼서 옮겨줄 예정 */}
          <nav className="absolute w-screen pt-5 bg-white group-hover:block top-[57px] left-[calc(50px-300px)]">
            <ul className="font-normal">
              <li className="font-bold">인기 여행지</li>
              <li>
                <a href="/" className="hover:text-red-400 hover:cursor-pointer">
                  도쿄
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-red-400 hover:cursor-pointer">
                  교토
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-red-400 hover:cursor-pointer">
                  오사카
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-red-400 hover:cursor-pointer">
                  홋카이도
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-red-400 hover:cursor-pointer">
                  오키나와
                </a>
              </li>
            </ul>
          </nav>
        </li>

        <li>
          <a
            href="/"
            className="flex items-center justify-center h-full p-1 text-center w-28 hover:border-b-2 hover:border-red-400"
          >
            즐길 거리
          </a>
        </li>

        <li>
          <a
            href="/"
            className="flex items-center justify-center h-full p-1 text-center w-28 hover:border-b-2 hover:border-red-400"
          >
            여행 계획하기
          </a>
        </li>

        <li>
          <a
            href="/"
            className="flex items-center justify-center h-full p-1 text-center w-28 hover:border-b-2 hover:border-red-400"
          >
            최신뉴스
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
