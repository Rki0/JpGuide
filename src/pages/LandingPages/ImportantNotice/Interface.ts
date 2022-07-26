export interface NoticeType {
  title: string;
  time: string;
  img: string;
  href: string;
}

export const noticeArr: NoticeType[] = [
  {
    title: "Visit Japan Web",
    time: "2월 14, 2022",
    img: "https://wallpaperaccess.com/full/3025468.jpg",
    href: "https://www.digital.go.jp/en/services/visit_japan_web-en/",
  },
  {
    title: "Japan Safe Travel Information",
    time: "7월 22, 2022",
    img: "https://res-2.cloudinary.com/jnto/image/upload/w_670,h_670,c_fill,f_auto,fl_lossy,q_auto/v1550549648/newsfromourpartners/thum_jnto_logo.jpg",
    href: "https://www.japan.travel/en/japan-safe-travel-information/",
  },
  {
    title: "Coronavirus (COVID-19) travel restrictions",
    time: "",
    img: "https://res-2.cloudinary.com/jnto/image/upload/w_670,h_670,c_fill,f_auto,fl_lossy,q_auto/v1550549648/newsfromourpartners/thum_jnto_logo.jpg",
    href: "https://www.japan.travel/en/practical-coronavirus-information/government-measures/",
  },
];
