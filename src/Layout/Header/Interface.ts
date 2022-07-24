// 하위 메뉴에 들어갈 요소 타입 정의(object 형태)
export interface DropMenuProps {
  where: string;
  whereLink: string;
}

// 하위 메뉴에 들어갈 이미지 타입 정의(object 형태)
export interface DropImgProps {
  img: string;
  imgHref: string;
}

// HeaderNav 메뉴 타입 정의
export interface NavMenuProps {
  name: string;
  nameLink: string;
  dropMenu: DropMenuProps[];
  dropImg: DropImgProps[];
}

// HeaderNav 메뉴에서 보일 모든 요소들
export const NavMenu: NavMenuProps[] = [
  {
    name: "여행지",
    nameLink: "https://www.japan.travel/ko/destinations/",
    dropMenu: [
      {
        where: "도쿄",
        whereLink: "https://www.japan.travel/ko/destinations/kanto/tokyo/",
      },
      {
        where: "교토",
        whereLink: "https://www.japan.travel/ko/destinations/kansai/kyoto/",
      },
      {
        where: "오사카",
        whereLink: "https://www.japan.travel/ko/destinations/kansai/osaka/",
      },
      {
        where: "홋카이도",
        whereLink:
          "https://www.japan.travel/ko/destinations/hokkaido/hokkaido/",
      },
      {
        where: "오키나와",
        whereLink: "https://www.japan.travel/ko/destinations/okinawa/okinawa/",
      },
    ],
    dropImg: [
      {
        img: "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,fl_lossy,f_auto/v1513913417/yamagata/Yamagata502_1",
        imgHref: "https://www.japan.travel/ko/spot/1798/",
      },
      {
        img: "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,fl_lossy,f_auto/v1514196022/nagano/Nagano106_2",
        imgHref: "https://www.japan.travel/ko/spot/1344/",
      },
      {
        img: "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,fl_lossy,f_auto/v1515928270/hokkaido/Hokkaido1463_13",
        imgHref: "https://www.japan.travel/ko/spot/1884/",
      },
      {
        img: "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,fl_lossy,f_auto/v1517338660/tochigi/Tochigi982_21",
        imgHref: "https://www.japan.travel/ko/spot/1477/",
      },
    ],
  },
  {
    name: "즐길 거리",
    nameLink: "https://www.japan.travel/ko/things-to-do/",
    dropMenu: [
      {
        where: "겨울 가이드",
        whereLink: "https://www.japan.travel/ko/guide/winter-guide/",
      },
      {
        where: "후지산 가이드",
        whereLink: "https://www.japan.travel/ko/fuji-guide/",
      },
      {
        where: "벚꽃",
        whereLink:
          "https://www.japan.travel/ko/things-to-do/nature/cherry-blossoms/",
      },
      {
        where: "온천",
        whereLink: "https://www.japan.travel/ko/things-to-do/relaxation/onsen/",
      },
      {
        where: "산과 고원",
        whereLink: "https://www.japan.travel/ko/things-to-do/nature/mountain/",
      },
      {
        where: "예술과 디자인",
        whereLink: "https://www.japan.travel/ko/things-to-do/art-and-design/",
      },
      {
        where: "관광 명소",
        whereLink: "https://www.japan.travel/ko/things-to-do/attraction/",
      },
      {
        where: "문화",
        whereLink: "https://www.japan.travel/ko/things-to-do/culture/",
      },
      {
        where: "축제와 행사",
        whereLink:
          "https://www.japan.travel/ko/things-to-do/festivals-and-events/",
      },
      {
        where: "먹거리와 마실 거리",
        whereLink: "https://www.japan.travel/ko/things-to-do/eat-and-drink/",
      },
      {
        where: "자연",
        whereLink: "https://www.japan.travel/ko/things-to-do/nature/",
      },
      {
        where: "휴식",
        whereLink: "https://www.japan.travel/ko/things-to-do/relaxation/",
      },
      {
        where: "쇼핑",
        whereLink: "https://www.japan.travel/ko/things-to-do/shopping/",
      },
      {
        where: "모든 스토리와 가이드",
        whereLink: "https://www.japan.travel/ko/story-and-guide/",
      },
      {
        where: "모든 일정",
        whereLink: "https://www.japan.travel/ko/itineraries/",
      },
      {
        where: "모든 즐길 거리",
        whereLink: "https://www.japan.travel/ko/things-to-do/",
      },
    ],
    dropImg: [
      {
        img: "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,fl_lossy,f_auto/v1513934466/tokyo/Tokyo2249_16",
        imgHref: "https://www.japan.travel/ko/spot/1727/",
      },
      {
        img: "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,fl_lossy,f_auto/v1517193604/okinawa/Okinawa1985_9",
        imgHref:
          "https://www.japan.travel/ko/destinations/okinawa/okinawa/the-kerama-islands/",
      },
      {
        img: "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,fl_lossy,f_auto/v1514372576/kyoto/Kyoto1051_5",
        imgHref:
          "https://www.japan.travel/ko/destinations/kansai/kyoto/gion-and-higashiyama/",
      },
      {
        img: "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,fl_lossy,f_auto/v1514195354/nagano/Nagano2474_15",
        imgHref:
          "https://www.japan.travel/ko/destinations/hokuriku-shinetsu/nagano/hakuba/",
      },
    ],
  },
  {
    name: "여행 계획하기",
    nameLink: "https://www.japan.travel/ko/plan/",
    dropMenu: [
      {
        where: "첫 방문객을 위한 정보",
        whereLink: "https://www.japan.travel/ko/plan/",
      },
      {
        where: "공항 접근성",
        whereLink: "https://www.japan.travel/ko/plan/airport-access/",
      },
      {
        where: "일본에 가는 방법",
        whereLink: "https://www.japan.travel/ko/plan/getting-to-japan/",
      },
      {
        where: "자료실 -e- 가이드북",
        whereLink: "https://www.japan.travel/ko/kr/ebook/",
      },
      {
        where: "일본의 교통",
        whereLink: "https://www.japan.travel/ko/plan/getting-around/",
      },
      {
        where: "관광 안내소",
        whereLink: "https://www.japan.travel/ko/plan/tic/",
      },
      {
        where: "자원 봉사 가이드",
        whereLink: "https://www.japan.travel/ko/plan/list-of-volunteer-guides/",
      },
      {
        where: "자주 묻는 질문",
        whereLink: "https://faq.japan-travel.jnto.go.jp/",
      },
    ],
    dropImg: [
      {
        img: "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,fl_lossy,f_auto/v1517144164/static/Nagano117_3",
        imgHref: "https://www.japan.travel/ko/plan/online-reservation-sites/",
      },
      {
        img: "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,fl_lossy,f_auto/v1524473274/other/img_restaurant_search01",
        imgHref: "https://dining.japan.travel/ko/restaurant",
      },
      {
        img: "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,fl_lossy,f_auto/v1/media/filer_public/c1/ef/c1efe731-88d0-4667-9dae-dcba59ad6f27/img_covid_top_agalhe",
        imgHref:
          "https://www.japan.travel/ko/practical-coronavirus-information/",
      },
      {
        img: "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,fl_lossy,f_auto/v1517144190/static/pixta_24426523.jpg",
        imgHref: "https://www.japan.travel/ko/weather/",
      },
    ],
  },
  {
    name: "최신뉴스",
    nameLink: "https://www.japan.travel/ko/kr/topic/",
    dropMenu: [
      {
        where: "새소식",
        whereLink: "https://www.japan.travel/ko/kr/topic/",
      },
      {
        where: "JNTO뉴스",
        whereLink: "https://www.japan.travel/ko/kr/jntonews/",
      },
      {
        where: "MICE뉴스",
        whereLink: "https://www.japan.travel/ko/kr/micenews/",
      },
      {
        where: "입찰공고",
        whereLink: "https://www.japan.travel/ko/kr/notice/",
      },
    ],
    dropImg: [
      {
        img: "https://wallpaperaccess.com/full/3025468.jpg",
        imgHref: "https://wallpaperaccess.com/white-screen",
      },
    ],
  },
];
