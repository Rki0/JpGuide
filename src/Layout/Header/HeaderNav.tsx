import { useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { NavMenu } from "./Interface";

function HeaderNav() {
  const drop1 = useRef<HTMLLIElement>(null);
  const drop2 = useRef<HTMLLIElement>(null);
  const drop3 = useRef<HTMLLIElement>(null);
  const drop4 = useRef<HTMLLIElement>(null);

  // 원래는 useState는 타입이 자동 지정되므로, 별도로 명시하지않아도 되지만, num 변수가 undefined가 될 수도 있기 때문에 undefined까지 포함하는 것으로 타입 정의
  const [dropWidth, setDropWidth] = useState<number | undefined>(0);

  // 굳이 안해줘도 큰 문제는 없기 때문에 생략!
  // // 첫 렌더링 시 헤더 nav drop1의 left 좌표 값
  // let firstLeft = drop1.current?.getBoundingClientRect().left;

  // // firstLeft를 dropWidth로 설정
  // // mouseover를 하기 전에 미리 변수를 가지기 위함
  // useEffect(() => {
  //   setDropWidth(firstLeft);

  //   console.log("first", dropWidth);
  // }, [dropWidth]);

  const checkDropWidth = () => {
    // getBoundingClientRect().left를 바로 setState하니까 undefined가 나오므로
    // 다른 변수에 저장해서 사용하는 방식을 채택.
    let num = drop1.current?.getBoundingClientRect().left;

    // drop1이 될 수도, drop2, drop3, drop4가 될 수도 있는 상황이므로
    // getBoundingClientRect()를 지정할 대상을 적절하게 변경해줘야함.
    // 가장 간단한 방법은 addEventListener로 실행되는 함수를 각각 다르게 설정하는 것. 비효율적이긴하다.

    setDropWidth(num);
  };

  const checkDrop2Width = () => {
    let num = drop2.current?.getBoundingClientRect().left;
    setDropWidth(num);
  };

  const checkDrop3Width = () => {
    let num = drop3.current?.getBoundingClientRect().left;
    setDropWidth(num);
  };

  const checkDrop4Width = () => {
    let num = drop4.current?.getBoundingClientRect().left;
    setDropWidth(num);
  };

  // useEffect를 통해 화면 크기가 변하거나, nav에 마우스를 올렸을 경우
  // 해당 메뉴의 화면상 y축 거리를 탐색하도록 설정
  // mouseover 이벤트가 발생할 때마다 dropWidth를 setState하기 때문에 굳이 resize 할 때를 인식할 필요가 없음.
  useEffect(() => {
    // window.addEventListener("resize", checkDropWidth);
    drop1.current?.addEventListener("mouseover", checkDropWidth);
    drop2.current?.addEventListener("mouseover", checkDrop2Width);
    drop3.current?.addEventListener("mouseover", checkDrop3Width);
    drop4.current?.addEventListener("mouseover", checkDrop4Width);

    return () => {
      // window.removeEventListener("resize", checkDropWidth);
      drop1.current?.removeEventListener("mouseover", checkDropWidth);
      drop2.current?.removeEventListener("mouseover", checkDrop2Width);
      drop3.current?.removeEventListener("mouseover", checkDrop3Width);
      drop4.current?.removeEventListener("mouseover", checkDrop4Width);
    };
  }, [dropWidth]);

  return (
    <nav className="hidden lg:block">
      <ul className="flex font-bold">
        {/* li에 hover:border를 해버리면 메뉴가 들썩거리는 현상 발생. 아무래도 border가 공간을 차지하다보니 그런 것 같다 */}
        {/* 따라서, 가상 클래스 after를 사용함으로써 UX 향상 */}
        {/* <li className="hover:border-b-2 hover:border-red-400 hover:cursor-pointer"> */}

        {/* ref가 컴포넌트마다 다르게 설정되어야하는데, Interface.ts에서 한번에 가져와서 map으로 처리하려고 하다보니까 전부 다 같은 ref를 갖게 설정되어버림 */}
        {/* 삼항 연산자를 반복으로 사용해서 index 번호에 맞춰서 ref를 조건부 설정해주는게 좋을 것 같다 */}
        {NavMenu.map((item, index) => (
          // <li className="relative h-14 group" ref={drop1} key={index}>
          <li
            className="relative h-14 group"
            ref={
              index === 0
                ? drop1
                : index === 1
                ? drop2
                : index === 2
                ? drop3
                : index === 3
                ? drop4
                : null
            }
            key={index}
          >
            <a
              href={item.nameLink}
              className="flex items-center justify-center h-full p-1 text-center w-28 hover:border-b-2 hover:border-red-400"
            >
              {item.name}
            </a>

            {/* 드롭다운 메뉴 */}
            {/* nav가 li 안에 만들어져있다보니까 w-screen을 사용해도 해당 위치부터만 전부 채움 */}
            {/* absolute와 left를 활용해서 window.innerWidth에서 컴포넌트의 width값만큼을 빼서 옮겨줄 예정 */}
            {/* 문제 발생! Tailwind에서는 이 기능을 지원하지 않음 */}
            {/* style 속성에 따로 적어주는 것으로 변경 */}
            <DropdownMenu
              dropWidth={dropWidth}
              dropImg={item.dropImg}
              dropMenu={item.dropMenu}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;
