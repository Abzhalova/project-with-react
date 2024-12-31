import React from "react";
import "./Furniture.css";
import FurnitureImg from "../../assets/furniture-img.svg";

import FurnitureLogo1 from "../../assets/furniture-logo-1.svg";
import FurnitureLogo2 from "../../assets/furniture-logo-2.svg";
import FurnitureLogo3 from "../../assets/furniture-logo-3.svg";
import FurnitureLogo4 from "../../assets/furniture-logo-4.svg";
import FurnitureLogo5 from "../../assets/furniture-logo-5.svg";
import FurnitureLogo6 from "../../assets/furniture-logo-6.svg";

const Furniture = () => {
  return (
    <section>
      <div className="furniture-card">
        <div className="furniture-cont">
          <h3 className="fs-h3 line-height41 cr-khaki2 ">All Furniture</h3>
          <div className="flex furniture-p ">
            <p className="furniture-p2 cr-khaki fs-p-m line-height27 " >Shop By Room</p>
            <p className="furniture-p3 fs-p-m line-height27 cr-grey">Shop By Category</p>
            <p className="furniture-p4 fs-p-m line-height27 cr-grey">Shop By Style</p>
          </div>
        </div>
        <div className="furniture-logo-card flex">
          <div className="furniture-img-1">
            <img src={FurnitureImg} alt="FurnitureImg" />
          </div>
          <div className="logo-blocks">
            <div className="logo-block">
              <div className="logo-block-img">
                <img src={FurnitureLogo1} alt="error" />
                <p>Living Room</p>
              </div>
            </div>
            <div className="logo-block1">
              <div className="logo-block-img">
                <img src={FurnitureLogo2} alt="error" />
                <p>Kitchen</p>
              </div>
            </div>
            <div className="logo-block2">
              <div className="logo-block-img">
                <img src={FurnitureLogo3} alt="error" />
                <p>Dining Room</p>
              </div>
            </div >
            <div className="logo-block3">
              <div className="logo-block-img">
                <img src={FurnitureLogo4} alt="error" />
                <p>Office</p>
              </div>
            </div>
            <div className="logo-block4">
              <div className="logo-block-img">
                <img src={FurnitureLogo5} alt="error" />
                <p>Bed Room</p>
              </div>
            </div>
            <div className="logo-block5">
              <div className="logo-block-img">
                <img src={FurnitureLogo6} alt="error" />
                <p>Hallway</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Furniture;
