import React from "react";
import Navbar from "../comp2/Navbar";
import ItemsGroup from "../comp2/ItemsGroup";
import Footer from "../comp2/Footer";
import Contact from "./Contact";
function Home() {
  return (
    <>
      <Navbar />
      <div className="marquee">
        <marquee behavior="" direction="">
          React is a declarative, efficient, and flexible JavaScript library for
          building user interfaces
        </marquee>
      </div>

      <ItemsGroup />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
