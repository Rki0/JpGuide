import { AiOutlineLeft } from "react-icons/ai";

interface PropsType {
  detailMenu1Handler: () => void;
}

const menu1Arr: string[] = ["도쿄", "교토", "오사카", "훗카이도", "오키나와"];

function Menu1({ detailMenu1Handler }: PropsType) {
  return (
    <ul className="">
      <li onClick={detailMenu1Handler}>
        <button className="relative flex items-center w-full h-12 font-bold border-b-2">
          <AiOutlineLeft className="m-4" />
          Back
        </button>
      </li>
      <li className="h-12 border-b-2">
        <span className="relative flex items-center justify-between w-full p-3">
          인기 여행지
        </span>
      </li>

      {menu1Arr.map((item) => (
        <li className="h-12 border-b-2">
          <button className="relative flex items-center justify-between w-full p-3">
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Menu1;
