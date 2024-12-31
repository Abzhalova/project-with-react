import React from "react";
import "./Footer.css";

import FooterImg from "../../assets/footer-logo-1.svg";
import FooterImg2 from "../../assets/footer-logo-2.svg";
import FooterImg3 from "../../assets/footer-logo-3.svg";
import FooterImg4 from "../../assets/footer-logo-4.svg";
import FooterImg5 from "../../assets/footer-logo-5.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-card ">
        <div className="flex">
          <div className="dudeShape-block">
            <h2 className="fs-h3 line-height29 cr-white">DudeShape</h2>
            <p className="fs-p-s line-height25 cr-white">
            Lorem ipsum dolor sit amet, conse
            ctetur adipiscing elit, sed eiusmod tempor incididunt ut labore .</p>
            <h3 className="fs-p-m line-height25 cr-white">Follow Us :</h3>
            <div className="footer-icon flex ">
              <div className="bg-icon">
                <img src={FooterImg} alt="error" />
              </div>
              <div className="bg-icon">
                <img src={FooterImg2} alt="error" />
              </div>
              <div className="bg-icon">
                <img src={FooterImg3} alt="error" />
              </div>
              <div className="bg-icon">
                <img src={FooterImg4} alt="error" />
              </div>
            </div>
          </div>

          <div className="take-block">
            <h3 className="fs-p-m line-height25 cr-white">Take a tour</h3>
            <div className="fs-p-s line-height23 take-text">
              <p>Features</p>
              <p>Pricing</p>
              <p>Product</p>
              <p>Support</p>
            </div>
          </div>
          <div className="comp-block">
            <h3 className="fs-p-m line-height25  cr-white">Our company</h3>
            <div className="fs-p-s line-height23 comp-text">
              <p>About Us</p>
              <p>Blog</p>
              <p>Media</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="subscribe-block">
            <div className="subscribe-text" >
              <h3 className="fs-p-m line-height25 cr-white">Subscribe</h3>
              <p className="fs-p-s line-height23 cr-white ">Subscribe to get the latest news from us</p>
            </div>
            <div  className="btn-block-foot">
              
                <input type="text" placeholder="Email Address" />
                <button className="btn-foot">
                  <img src={FooterImg5} alt="error" />
                </button>
              
            </div>
          </div>
        </div>

        <hr className="hr"/>
        <p className="foot-text fs-p-s line-height23">Copyright @ 2021. Crafted with love.</p>
      </div>
    </footer>
  );
};

export default Footer;
