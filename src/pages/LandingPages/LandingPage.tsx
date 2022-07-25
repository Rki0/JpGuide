import Layout from "../../Layout/Layout";
import AutoSlide from "./AutoSlide";

function LandingPage() {
  return (
    <Layout>
      <AutoSlide />
      <div>중요 공지</div>
      <div>여행 하이라이트 컴포넌트</div>
      <div>인기 장소 컴포넌트</div>
      <div>일본 월간 웹매거진 컴포넌트</div>
      <div>아이콘 메뉴 컴포넌트</div>
    </Layout>
  );
}

export default LandingPage;
