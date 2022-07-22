import { AiOutlineLeft } from "react-icons/ai";

interface PropsType {
  detailMenu2Handler: () => void;
}

// 링크까지 구현하고 싶으면 배열 원소를 object로 만들어서 사용하면 됨
// 일단 링크는 하지말자...메뉴가 너무 많아서...
const menu2Arr: string[] = [
  "겨울 가이드",
  "후지산 가이드",
  "벚꽃",
  "온천",
  "산과 고원",
  "체험과 모험",
  "예술과 디자인",
  "관광 명소",
  "문화",
  "축제와 행사",
  "먹거리와 마실 거리",
  "자연",
  "휴식",
  "쇼핑",
  "모든 스토리와 가이드",
  "모든 일정",
  "모든 즐길 거리",
];

function Menu2({ detailMenu2Handler }: PropsType) {
  return (
    <ul className="">
      <li onClick={detailMenu2Handler}>
        <button className="relative flex items-center w-full h-12 font-bold border-b-2">
          <AiOutlineLeft className="m-4" />
          Back
        </button>
      </li>

      {menu2Arr.map((item) => (
        <li className="h-12 border-b-2">
          <button className="relative flex items-center justify-between w-full p-3">
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Menu2;
