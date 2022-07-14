import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="p-2 d-flex justify-content-center container mb-3 mt-4 footer-icons ">
        <div className="items ">
          <div className="item-icon">
            <i class="fa-brands fa-react fa-2x"></i>
          </div>
          <div className="item-icon">
            <i class="fa-brands fa-js-square fa-2x"></i>
          </div>
          <div className="item-icon">
            <i class="fa-brands fa-facebook-f fa-2x"></i>
          </div>
        </div>
      </div>
      <div className="footer bg-dark ">
        <h4 className="text-center text-white">React masterclass</h4>
      </div>
    </>
  );
}

export default Footer;
