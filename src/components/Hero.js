import React from "react";
import Img from "./evgeni-tcherkasski-UcuK-96Asr4-unsplash.jpg";
function Hero() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <img
          src={Img}
          style={{ height: "60vh", width: "100%" }}
          srcset=""
          className="img-fluid"
        />
      </div>
    </>
  );
}

export default Hero;
