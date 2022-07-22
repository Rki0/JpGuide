import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ToggleMenu from "./ToggleMenu/ToggleMenu";

function Layout(props: { children: React.ReactNode }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuHandler = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <div className="pt-10 lg:pt-[60px] relative">
      <Header menuHandler={menuHandler} />

      {toggleMenu ? <ToggleMenu menuHandler={menuHandler} /> : null}

      <main>{props.children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
