interface OneImg {
  title: string;
  img: string;
  href: string;
}

interface FamousImgType {
  bigImg: OneImg;
  smallImg: OneImg[];
}

interface FamousPropsType {
  images: FamousImgType;
  direction: string;
}

export const FamousArr: FamousPropsType[] = [
  {
    images: {
      bigImg: {
        title: "도톤보리 & 신사이바시",
        img: "https://res-2.cloudinary.com/jnto/image/upload/w_510,h_347,c_fill,f_auto,fl_lossy,q_auto/v1514378461/osaka/Osaka798_4",
        href: "https://www.japan.travel/ko/destinations/kansai/osaka/dotonbori-and-shinsaibashi/",
      },
      smallImg: [
        {
          title: "다테야마구로베알펜루트(도야마)",
          img: "https://res-2.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,f_auto,fl_lossy,q_auto/v1514195526/toyama/Toyama1209_3",
          href: "https://www.japan.travel/ko/spot/1420/",
        },
        {
          title: "가나자와",
          img: "https://res-3.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,f_auto,fl_lossy,q_auto/v1514197289/ishikawa/Ishikawa007_7",
          href: "https://www.japan.travel/ko/destinations/hokuriku-shinetsu/ishikawa/kanazawa-and-around/",
        },
        {
          title: "시라카와고",
          img: "https://res-4.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,f_auto,fl_lossy,q_auto/v1514366852/gifu/Gifu1352_1",
          href: "https://www.japan.travel/ko/spot/2031/",
        },
        {
          title: "게리마의 섬들",
          img: "https://res-1.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,f_auto,fl_lossy,q_auto/v1517193604/okinawa/Okinawa1985_9",
          href: "https://www.japan.travel/ko/destinations/okinawa/okinawa/the-kerama-islands/",
        },
      ],
    },
    direction: "left",
  },
  {
    images: {
      bigImg: {
        title: "하쿠바",
        img: "https://res-3.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,f_auto,fl_lossy,q_auto/v1514195354/nagano/Nagano2474_15",
        href: "https://www.japan.travel/ko/destinations/hokuriku-shinetsu/nagano/hakuba/",
      },
      smallImg: [
        {
          title: "고쿄와 그 주변",
          img: "https://res-3.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,f_auto,fl_lossy,q_auto/v1513945878/tokyo/Tokyo2229_2",
          href: "https://www.japan.travel/ko/spot/2121/",
        },
        {
          title: "히로사키와 그 주변",
          img: "https://res-4.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,f_auto,fl_lossy,q_auto/v1513857561/aomori/Aomori2204_10",
          href: "https://www.japan.travel/ko/destinations/tohoku/aomori/hirosaki-and-shirakami/",
        },
        {
          title: "오타루",
          img: "https://res-4.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,f_auto,fl_lossy,q_auto/v1515929126/hokkaido/Hokkaido1518_3",
          href: "https://www.japan.travel/ko/spot/2161/",
        },
        {
          title: "미야지마",
          img: "https://res-4.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,f_auto,fl_lossy,q_auto/v1644207417/hiroshima/20201118_momijidani_park_24.jpg",
          href: "https://www.japan.travel/ko/destinations/chugoku/hiroshima/miyajima/",
        },
      ],
    },
    direction: "right",
  },
  {
    images: {
      bigImg: {
        title: "후쿠이현립공룡박물관",
        img: "https://res-3.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,f_auto,fl_lossy,q_auto/v1514193270/fukui/Fukui890_1",
        href: "https://www.japan.travel/ko/spot/1384/",
      },
      smallImg: [
        {
          title: "기온 & 히가시야마",
          img: "https://res-4.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,f_auto,fl_lossy,q_auto/v1514372576/kyoto/Kyoto1051_5",
          href: "https://www.japan.travel/ko/destinations/kansai/kyoto/gion-and-higashiyama/",
        },
        {
          title: "도톤보리",
          img: "https://res-4.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,f_auto,fl_lossy,q_auto/v1514373914/osaka/Osaka798_6",
          href: "https://www.japan.travel/ko/spot/2207/",
        },
        {
          title: "이와테 해안",
          img: "https://res-1.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,f_auto,fl_lossy,q_auto/v1516731992/iwate/Iwate1252_4",
          href: "https://www.japan.travel/ko/destinations/tohoku/iwate/coastal-iwate-area/",
        },
        {
          title: "삿포로맥주박물관",
          img: "https://res-3.cloudinary.com/jnto/image/upload/w_670,h_450,c_fill,f_auto,fl_lossy,q_auto/v1515931157/hokkaido/Hokkaido1392_2",
          href: "https://www.japan.travel/ko/spot/1922/",
        },
      ],
    },
    direction: "left",
  },
];
