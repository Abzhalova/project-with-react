import React from "react";
import "./Form.css";
import FormImg from "../../assets/form-img.svg";

const Form = () => {
  return (
    <form>
      <div className="form-card">
        <div className="form-text">
          <h2 className="fs-h2 line-height41 ">
            Subscribe to get the latest news about us
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore at dolore.
          </p>
        </div>
        <div className="form-block cr-white">
         
            <img src={FormImg} alt="FormImg" />
            <input type="text" placeholder="Enter your email" />
          

          <button className="btn-inp">Register</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
