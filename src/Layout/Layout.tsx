import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="pt-10 lg:pt-[60px] relative">
      <Header />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
