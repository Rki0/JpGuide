import Layout from "../../Layout/Layout";
import AutoSlide from "./AutoSlide/AutoSlide";
import ImportantNotice from "./ImportantNotice/ImportantNotice";
import TravelHighlight from "./TravelHighlight/TravelHighlight";
import FamousPlace from "./FamousPlace/FamousPlace";
import MonthlyWeb from "./MonthlyWeb/MonthlyWeb";
import IconMenu from "./IconMenu/IconMenu";

function LandingPage() {
  // "start": "craco start",
  // "build": "craco build",
  // "test": "craco test",

  return (
    <Layout>
      <AutoSlide />
      <ImportantNotice />
      {/* <TravelHighlight /> */}
      <FamousPlace />
      <MonthlyWeb />
      <IconMenu />
    </Layout>
  );
}

export default LandingPage;
