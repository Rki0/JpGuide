import React from "react";
import { BiLinkExternal } from "react-icons/bi";

function Footer() {
  return (
    <div className="flex flex-wrap justify-center w-screen bg-red-400">
      <div className="flex flex-col items-start w-1/2 p-5 mb-4">
        <span className="text-base font-bold text-white mb-2.5">
          유용한 링크
        </span>
        <ul className="text-sm">
          <li>처음 방문하시는 분들께</li>
          <li>
            <a
              href="https://www.japan.travel/ko/weather/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
            >
              일본 날씨
              <BiLinkExternal className="absolute inline top-0.5" />
            </a>
          </li>
          <li>자주 묻는 질문</li>
          <li>
            <a
              href="https://www.japan.travel/en/japan-tours-and-activities/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
            >
              일본 투어 &amp; 활동 검색
              <BiLinkExternal className="inline" />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col flex-wrap w-1/2 p-5 mb-4">
        <span className="text-base font-bold text-white mb-2.5">
          JNTO 관련 사이트
        </span>
        <ul className="text-sm">
          <li>
            <a
              href="https://www.japanmeetings.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              일본 컨벤션 뷰로
            </a>
          </li>
          <li>
            <a
              href="https://business.jnto.go.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              일본 온라인 미디어 센터
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col flex-wrap w-1/2 p-5 mb-4">
        <span className="text-base font-bold text-white mb-2.5">JNTO 소개</span>
        <ul className="text-sm">
          <li>기관 소개</li>
          <li>서울사무소</li>
          <li>
            <a
              href="https://www.jnto.go.jp/jpn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              본부(일본)
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col flex-wrap w-1/2 p-5 mb-4">
        <span className="text-base font-bold text-white mb-2.5 invisible">
          invisible
        </span>
        <ul className="text-sm">
          <li>개인정보 처리방침</li>
          <li>쿠키 정책</li>
          <li>이용 약관</li>
          <li>링크</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
