import { useState } from "react";
import { hightlightArr } from "./Interface";
import SlideBtn from "./SlideBtn";

function TravelHighlight() {
  // 슬라이드 가장 앞쪽에 배치될 month를 측정
  // +1을 해줘야지 현재 달이 나옴.
  let date = new Date();
  let month = date.getMonth();

  // copiedArr에서 슬라이드 길이가 변하게 되므로, 현재 달을 첫 인덱스 번호로 사용하고 싶다면 +5를 또 해줘야함
  // 즉, month + 1 + 5 = month + 6
  // 앞 쪽에 슬라이드 길이가 추가된건 6인데 왜 5를 더하느냐? 인덱스 번호는 0부터 5까지니까...
  const [slideIndex, setSlideIndex] = useState(month + 6);

  const SLIDE_NUM = hightlightArr.length;

  let addedArr = [...hightlightArr];
  const beforeSlide = addedArr.splice(6, SLIDE_NUM - 1);
  const afterSlide = addedArr;

  // 각각 6, 12, 6 = 총 24개 슬라이드
  let copiedArr = [...beforeSlide, ...hightlightArr, ...afterSlide];

  const slideHandler = (direction: number) => {
    setSlideIndex((slideIndex) => slideIndex + direction);
  };

  return (
    <div>
      <h1 className="py-8 text-3xl font-bold pl-[5.33333vw]">
        여행 하이라이트
      </h1>

      <div className="relative w-screen overflow-hidden">
        <div className="bg-[rgba(255,255,255,0.5)] absolute lg:px-[12.5vw] h-full z-10 w-full">
          <SlideBtn direction="left" onClick={() => slideHandler(-1)} />
          <SlideBtn direction="right" onClick={() => slideHandler(1)} />
        </div>

        <div className="px-[5vw] lg:px-[12.5vw]">
          {/* 이 슬라이드는 12개월의 관광 명소를 보여주는 곳으로 슬라이드 수가 달라질 일이 없어서 고정된 숫자로 표시해도 문제 없음 */}
          {/* md 이전에는 2개씩 표시가 되므로 24/2 = 12, md 이후에는 4개씩 표시가 되므로 24/4 = 6 */}
          <div
            className="flex w-[1200vw] lg:w-[600vw]"
            style={{
              transition: "all 500ms ease-in-out",
              transform: `translateX(${
                -1 * ((100 / copiedArr.length) * slideIndex)
              }%)`,
            }}
          >
            {copiedArr.map((item, index) => (
              <div className="mx-2" key={index}>
                <a
                  href={item.href}
                  className="relative flex items-center justify-center w-full h-full rounded"
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
    </div>
  );
}

export default TravelHighlight;
