import { useEffect, useRef, useState } from "react";
import { slideArr } from "./Interface";
import SlideBtn from "./SlideBtn";
import Pagenation from "./Pagenation";

interface IUseInterval {
  (callback: () => void, interval: number): void;
}

// setInterval 기능을 Typescript + React로 구현해놓은 커스텀 Hooks
const useInterval: IUseInterval = (callback, interval) => {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    let id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval]);
};

function AutoSlide() {
  // state가 1부터 시작하는 이유
  // 무한 슬라이드를 구현하기 위해서 slideArr 앞 뒤에 요소를 추가했기 때문에, 1번 인덱스가 첫번째 슬라이드가 됨.
  const [slideIndex, setSlideIndex] = useState(1);

  const slideRef = useRef<HTMLDivElement>(null);

  const SLIDE_NUM = slideArr.length;

  const beforeSlide = slideArr[SLIDE_NUM - 1];
  const afterSlide = slideArr[0];

  // 무한 슬라이드를 구현하기 위해 새롭게 배열을 만듦.
  let copiedArr = [beforeSlide, ...slideArr, afterSlide];

  const COPIED_NUM = copiedArr.length;

  // 이 방법을 쓰면 안되는 이유
  // -12.5%만 이동하기 때문. 한번 클래스를 추가해서 이동한 뒤에 -12.5%를 아무리 translate 해도 그 자리에 멈춰있는다.
  // ref를 걸어놓은 것의 12.5%인 부분에 이미 가 있기 때문에 변화가 없는 것. 즉, 이미지의 인덱스 번호 등을 활용해서 translate할 거리를 거기에 맞춰 늘려나가야함.
  // const slideStart = () => {
  //   // Tailwind를 사용하고 있으므로 클래스 명을 추가해줘야 스타일이 바뀜.
  //   // 100%를 translate하면 800vw가 이동하므로 100/8 = 12.5%를 움직여야지 하나의 이미지만 이동됨.
  //   slideRef.current?.classList.add("translate-x-[-12.5%]");
  // };
  //
  // useEffect(() => {
  //   slideStart();
  // }, [slideIndex]);

  // useInterval()에 사용하는 interval을 인덱스 번호에 따라 조절함으로써 UX를 키워줌.
  // 무한 슬라이드의 핵심 부분인 마지막 슬라이드와 복제된 첫 번째 슬라이드 때문에
  // 그 때의 interval을 transition의 duration과 같게 해줘야한다. 그래야 무한 슬라이드가 매끄러움.
  // last 뒤에 있는 복제된 first의 인덱스가 9이므로, 9 -> 10이 되는 것을 다른 때보다 빠르게 진행시켜서 시각적으로 슬라이드가 계속되는 것 처럼 보이게 함.
  let interval: number = 3000;
  if (slideIndex === 9) {
    interval = 500;
  } else {
    interval = 3000;
  }

  // 무한 슬라이드(왼쪽으로만 가는)
  // 1. last,first,...,last,first 식으로 배열을 만듦
  // 2. first부터 슬라이드 시작(인덱스 1)
  // 3. last 뒤에 있는 first 인덱스까지 간다(인덱스 1부터 마지막 인덱스까지)
  // 4. 인덱스가 last 뒤에 있는 first보다 커지면, transition을 멈추고, 앞에 있는 first로 빠르게 이동한다.
  // last 뒤에 있는 복제된 first의 인덱스가 9이므로, 9 -> 10이 되었을 때 동작한다.
  if (slideIndex === 10) {
    // transition 속성을 없앰
    if (slideRef.current) {
      slideRef.current.style.transition = "";
    }

    // slideIndex를 first 슬라이드로 변경
    // transition이 없으므로 바로 이동됨.
    // 그런데 이미지는 같기 때문에 유저 눈에는 안 바뀌는 것 처럼 보인다.
    setSlideIndex(1);

    // setTimeout을 걸지 않고 바로 다시 transition을 설정해주면
    // slideIndex가 10에서 1로 가는것보다 빨리 적용되버려서, transition 효과가 나타나버림. UX가 망가지다 못해 폭발해버린다.
    // 10 -> 1로 가는게 interval 500으로 되어 있는데, setTimeout을 안 걸면 500보다 빠르게 style이 복구되버린다는 뜻
    // setTimeout 설정을 0으로 해놔도 비동기적으로 실행되기 때문에 바로 선언하는 것과 시간 차가 있다.
    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = "all 500ms ease-in-out";
      }
    }, 0);
  }

  useInterval(() => setSlideIndex((slideIndex) => slideIndex + 1), interval);

  // 슬라이드 버튼 클릭시 방향에 따라 슬라이드 인덱스 조정
  const slideHandler = (direction: number) => {
    setSlideIndex((slideIndex) => slideIndex + direction);
  };

  // 한번이라도 슬라이드 버튼 클릭시 무한 슬라이드에 영향이 감. 복제본과 오리지널 사이에서만.
  // useInterval을 통해서 지속적으로 증가하고 있는 slideIndex를 강제적으로 변환했기 때문에 그런듯.
  // 음....이 문제는 나타날 때도 있고, 안 나타날 때도 있다...일단 해결하는 걸 보류하자. 정확한 원인 파악이 안된다.

  return (
    <div className="relative overflow-hidden z-[1] group">
      <SlideBtn direction="left" onClick={() => slideHandler(-1)} />
      <SlideBtn direction="right" onClick={() => slideHandler(1)} />
      <Pagenation setSlideIndex={setSlideIndex} slideIndex={slideIndex} />
      <div
        className="flex"
        ref={slideRef}
        style={{
          width: `${100 * COPIED_NUM}vw`,
          transition: "all 500ms ease-in-out",
          transform: `translateX(${
            -1 * ((100 / copiedArr.length) * slideIndex)
          }%)`,
        }}
      >
        {copiedArr.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.img}
              alt="banner"
              className="h-[500px] sm:h-[655px] lg:w-screen lg:h-[700px]"
            />

            <div className="absolute px-[5%] font-bold text-white top-1/2">
              <h1 className="text-[24px] lg:text-[28px]">{item.imgTitle}</h1>
              <p className="text-[36px] lg:text-[52px]">{item.imgDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutoSlide;
