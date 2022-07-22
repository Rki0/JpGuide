import { AiOutlineLeft } from "react-icons/ai";

interface PropsType {
  detailMenu3Handler: () => void;
}

const menu3Arr: string[] = [
  "첫 방문객을 위한 정보",
  "공항 접근성",
  "일본에 가는 방법",
  "자료실 -e- 가이드북",
  "일본의 교통",
  "관광 안내소",
  "자원 봉사 가이드",
  "자주 묻는 질문",
];

function Menu3({ detailMenu3Handler }: PropsType) {
  return (
    <ul className="">
      <li onClick={detailMenu3Handler}>
        <button className="relative flex items-center w-full h-12 font-bold border-b-2">
          <AiOutlineLeft className="m-4" />
          Back
        </button>
      </li>

      {menu3Arr.map((item) => (
        <li className="h-12 border-b-2">
          <button className="relative flex items-center justify-between w-full p-3">
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Menu3;
