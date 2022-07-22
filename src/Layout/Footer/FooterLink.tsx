import { BiLinkExternal } from "react-icons/bi";

function FooterLink() {
  return (
    <div className="flex flex-wrap justify-center w-full">
      <div className="flex flex-col items-start p-5 mb-4 w-[150px]">
        <span className="text-base font-bold text-white mb-2.5">
          유용한 링크
        </span>
        <ul className="text-sm text-pink-100">
          <li>
            <a href="/" className="hover:text-white">
              처음 방문하시는 분들께
            </a>
          </li>
          <li>
            <a
              href="https://www.japan.travel/ko/weather/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative hover:text-white"
            >
              일본 날씨
              <BiLinkExternal className="absolute inline top-0.5" />
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-white">
              자주 묻는 질문
            </a>
          </li>
          <li>
            <a
              href="https://www.japan.travel/en/japan-tours-and-activities/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative hover:text-white"
            >
              일본 투어 &amp; 활동 검색
              <BiLinkExternal className="inline" />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col flex-wrap p-5 mb-4 w-[150px]">
        <span className="text-base font-bold text-white mb-2.5">
          JNTO 관련 사이트
        </span>
        <ul className="text-sm text-pink-100">
          <li>
            <a
              href="https://www.japanmeetings.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              일본 컨벤션 뷰로
              <BiLinkExternal className="inline" />
            </a>
          </li>
          <li>
            <a
              href="https://business.jnto.go.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              일본 온라인 미디어 센터
              <BiLinkExternal className="inline" />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col flex-wrap p-5 mb-4 w-[150px]">
        <span className="text-base font-bold text-white mb-2.5">JNTO 소개</span>
        <ul className="text-sm text-pink-100">
          <li>
            <a href="/" className="hover:text-white">
              기관 소개
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-white">
              서울사무소
            </a>
          </li>
          <li>
            <a
              href="https://www.jnto.go.jp/jpn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              본부(일본)
              <BiLinkExternal className="inline" />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col flex-wrap p-5 mb-4 w-[150px]">
        <span className="text-base font-bold text-white mb-2.5 invisible">
          invisible
        </span>
        <ul className="text-sm text-pink-100">
          <li>
            <a href="/" className="hover:text-white">
              개인정보 처리방침
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-white">
              쿠키 정책
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-white">
              이용 약관
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-white">
              링크
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterLink;
