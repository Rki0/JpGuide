import { AiOutlineLeft } from "react-icons/ai";

interface PropsType {
  detailMenu4Handler: () => void;
}

const menu4Arr: string[] = ["새소식", "JNTO뉴스", "MICE뉴스", "입찰공고"];

function Menu4({ detailMenu4Handler }: PropsType) {
  return (
    <ul className="">
      <li onClick={detailMenu4Handler}>
        <button className="relative flex items-center w-full h-12 font-bold border-b-2">
          <AiOutlineLeft className="m-4" />
          Back
        </button>
      </li>

      {menu4Arr.map((item) => (
        <li className="h-12 border-b-2">
          <button className="relative flex items-center justify-between w-full p-3">
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Menu4;
