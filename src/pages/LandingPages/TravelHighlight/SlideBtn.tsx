import { DirectionBtnType } from "./Interface";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function SlideBtn({ direction, onClick }: DirectionBtnType) {
  return (
    <div
      className={
        direction === "left"
          ? "hidden items-center bg-red-600 rounded-l-full text-white lg:flex w-16"
          : "hidden items-center bg-red-600 rounded-r-full text-white lg:flex w-16"
      }
    >
      <button onClick={onClick}>
        {direction === "left" ? (
          <AiOutlineLeft size="20px" />
        ) : (
          <AiOutlineRight size="30px" />
        )}
      </button>
    </div>
  );
}

export default SlideBtn;
