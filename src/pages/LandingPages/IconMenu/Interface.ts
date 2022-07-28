export interface IconMenuType {
  img: string;
  href: string;
  title: string;
  lists: string[];
}

export const IconMenuArr: IconMenuType[] = [
  {
    img: "https://asset.japan.travel/image/upload/v1515775310/static/svg/common/icon_passport.svg",
    href: "https://www.japan.travel/ko/plan/visa-info/",
    title: "비자 정보",
    lists: ["대사관", "일본에 가는 방법"],
  },
  {
    img: "https://asset.japan.travel/image/upload/v1515774718/static/svg/common/icon_first_time.svg",
    href: "https://www.japan.travel/ko/plan/",
    title: "처음 방문하시는 분들께",
    lists: [
      "Wi-Fi & 인터넷 연결",
      "날씨 & 지형",
      "IC 여행 카드",
      "재팬 레일 패스",
    ],
  },
  {
    img: "https://asset.japan.travel/image/upload/v1515774718/static/svg/common/icon_stay.svg",
    href: "https://www.japan.travel/ko/plan/online-reservation-sites/",
    title: "숙소",
    lists: ["호텔", "료칸", "고급 숙박", "합리적인 숙박"],
  },
  {
    img: "https://asset.japan.travel/image/upload/v1515774718/static/svg/common/icon_airport.svg",
    href: "https://www.japan.travel/ko/plan/airport-access/",
    title: "공항 접근성",
    lists: ["하네다 공항", "나리타 공항", "오사카(KIX)", "후쿠오카 공항"],
  },
  {
    img: "https://asset.japan.travel/image/upload/v1515774718/static/svg/common/icon_getting_around.svg",
    href: "https://www.japan.travel/ko/plan/getting-around/",
    title: "둘러보기",
    lists: ["신칸센(총알 열차)", "택시", "자전거", "수하물 & 보관"],
  },
  {
    img: "https://asset.japan.travel/image/upload/v1515774718/static/svg/common/icon_itineraries.svg",
    href: "https://www.jnto.go.jp/brochures/eng/index.php",
    title: "브로슈어 다운로드",
    lists: [],
  },
];
