import { useState } from "react";
import { hightlightArr } from "./Interface";

function TravelHighlight() {
  let date = new Date();
  let month = date.getMonth();
  console.log(month);

  const [slideIndex, setSlideIndex] = useState(1);

  const SLIDE_NUM = hightlightArr.length;

  const beforeSlide = hightlightArr[SLIDE_NUM - 1];
  const afterSlide = hightlightArr[0];

  // 각각 1, 12, 1 = 총 14개의 슬라이드
  let copiedArr = [beforeSlide, ...hightlightArr, afterSlide];

  return (
    <div>
      <h1 className="py-8 text-3xl font-bold pl-[5.33333vw]">
        여행 하이라이트
      </h1>

      <div className="px-[7.5vw] overflow-hidden">
        {/* 이 슬라이드는 12개월의 관광 명소를 보여주는 곳으로 슬라이드 수가 달라질 일이 없어서 고정된 숫자로 표시해도 문제 없음 */}
        {/* md 이전에는 2개씩 표시가 되므로 12/2 = 6, md 이후에는 4개씩 표시가 되므로 12/4 = 3 */}
        <div
          className="flex w-[600vw] md:w-[400vw]"
          style={{
            transition: "all 500ms ease-in-out",
            transform: `translateX(${
              -1 * ((100 / copiedArr.length) * slideIndex)
            }%)`,
          }}
        >
          {copiedArr.map((item, index) => (
            <div className="mx-1" key={index}>
              <a
                href={item.href}
                className="relative flex items-center justify-center rounded"
              >
                <div className="absolute mx-auto my-0 text-center">
                  <h2 className="p-[5px] border-2 border-white rounded shadow-lg font-bold text-white drop-shadow-lg md:text-2xl">
                    {item.title}
                  </h2>
                </div>

                <img src={item.img} alt="monthly japan" className="rounded" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TravelHighlight;
