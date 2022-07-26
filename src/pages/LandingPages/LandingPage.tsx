import Layout from "../../Layout/Layout";
import AutoSlide from "./AutoSlide/AutoSlide";
import ImportantNotice from "./ImportantNotice/ImportantNotice";
import TravelHighlight from "./TravelHighlight/TravelHighlight";

function LandingPage() {
  return (
    <Layout>
      <AutoSlide />
      <ImportantNotice />
      <TravelHighlight />
      <div>인기 장소 컴포넌트</div>
      <div>일본 월간 웹매거진 컴포넌트</div>
      <div>아이콘 메뉴 컴포넌트</div>
    </Layout>
  );
}

export default LandingPage;
