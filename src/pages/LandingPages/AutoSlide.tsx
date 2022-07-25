import { useEffect, useRef, useState } from "react";
import { slideArr } from "./Interface";

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
  // const [slideIndex, setSlideIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);

  const slideRef = useRef<HTMLDivElement>(null);

  const SLIDE_NUM = slideArr.length;

  const beforeSlide = slideArr[SLIDE_NUM - 1];
  const afterSlide = slideArr[0];

  let copiedArr = [beforeSlide, ...slideArr, afterSlide];

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

  let interval: number = 3000;
  if (slideIndex === 9) {
    interval = 500;
  } else {
    interval = 3000;
  }

  // 슬라이드 index가 9가 되면 복사된 첫번째 슬라이드를 보여준다.
  // transition과 transform 효과를 정지하고 오리지널 첫번째 슬라이드로 빠르게 이동한다.
  if (slideIndex === 10) {
    // 여기까지 왔으면 1,2,3 과정 완료

    // 지금 문제가 뭐냐면 무한 슬라이드는 구현했는데, useInterval에서 3초마다 state가 1 증가하기 때문에
    // last 뒤에 있는 first에서 3초를 기다리고, 맨 앞 first로 가서 또 3초를 기다림...
    // 대안 1. useInterval의 interval을 조절
    // slideIndex가 8에서 9로 갈 때는 transition이 보임.
    // 그런데, slideIndex가 9가 되면 빠르게 slideIndex를 1로 만들어줘야하는데
    // 그 때는 애니메이션이 보이면 안됨.
    // 따라서, slideIndex가 9일 때 interval을 압도적으로 줄여서 이 if문을 빠르게 실행시킴
    // 유저에게는 맨 뒤 first에서 맨 앞 first로 가는데 시간적 위화감이 안 느껴지도록

    // 4단계
    // transition 속성을 없앰
    if (slideRef.current) {
      slideRef.current.style.transition = "";
    }

    // slideIndex를 first 슬라이드로 변경
    // transition이 없으므로 바로 이동됨.
    setSlideIndex(1);

    // setTimeout을 걸지 않고 바로 다시 transition을 설정해주면
    // slideIndex가 10에서 1로 가는것보다 빨리 적용되버려서, transition 효과가 나타나버림.
    // 10 -> 1로 가는게 interval 500으로 되어 있는데, setTimeout을 안 걸면 500보다 빠르게 style이 복구되버린다는 뜻
    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = "all 500ms ease-in-out";
      }
    }, 0);

    // interval이 200이면 그 사이에 여기까지 와버림.
    // interval보다 transition 효과 적용 시간이 더 빠르면

    // 무한 슬라이드 구현
    // 1. 마지막 슬라이드 뒤에서 복사된 첫번째 슬라이드를 보여줌. 이 때의 index는 8
    // 2. 그 때 ref로 참조하고 있는 컴포넌트의 transition 관련 style을 지워버림. transform을 지우면 이동이 멈추니까 안됨.
    // 3. setSlideIndex(0)을 실행. 슬라이드의 오리지널 첫번째 슬라이드로 이동
    // 4. 다시 초기 상태로 style 복구

    // 또 다른 방법
    // 1. last,first,...,last,first 식으로 배열을 만듦
    // 2. first부터 슬라이드 시작(인덱스 1)
    // 3. last 뒤에 있는 first 인덱스까지 간다(인덱스 1부터 마지막 인덱스까지)
    // 4. 인덱스가 last 뒤에 있는 first보다 커지면, transition을 멈추고, 앞에 있는 first로 빠르게 이동한다.
    // 4. 인덱스가 first 앞에 있는 last보다 작아지면, 동일, 뒤에 있는 last로 빠르게 이동한다.
  }

  useInterval(() => setSlideIndex((slideIndex) => slideIndex + 1), interval);

  return (
    <div className="overflow-hidden">
      {/* 슬라이드에 들어갈 이미지 개수가 8개이므로, 1개당 100vw */}
      <div
        className="flex"
        ref={slideRef}
        style={{
          // width: `${100 * SLIDE_NUM}vw`,
          width: "1000vw",
          transition: "all 500ms ease-in-out",
          transform: `translateX(${
            -1 * ((100 / copiedArr.length) * slideIndex)
          }%)`,
        }}
      >
        {/* <div
        className="flex w-[800vw] transition duration-500 ease-in-out"
        ref={slideRef}
        style={{
          transform: `translateX(${
            -1 * ((100 / slideArr.length) * slideIndex)
          }%)`,
        }}
      > */}

        {copiedArr.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.img}
              alt="banner"
              className="h-[500px] sm:h-[655px] lg:w-screen lg:h-[700px]"
            />

            <div className="absolute px-5 font-bold text-white top-1/2">
              <h1 className="text-[24px] lg:text-[28px]">{item.imgTitle}</h1>
              <p className="text-[36px] lg:text-[52px]">{item.imgDesc}</p>
            </div>
          </div>
        ))}

        {/* {slideArr.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.img}
              alt="banner"
              className="h-[500px] sm:h-[655px] lg:w-screen lg:h-[700px]"
            />

            <div className="absolute px-5 font-bold text-white top-1/2">
              <h1 className="text-[24px] lg:text-[28px]">{item.imgTitle}</h1>
              <p className="text-[36px] lg:text-[52px]">{item.imgDesc}</p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default AutoSlide;
