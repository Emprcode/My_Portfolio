import React from "react";
import fox from "../assets/fox.jpg";

export const Hero = () => {
  return (
    <div>
      <section class="hero">
        <div class="container">
          {/* <!-- .row>.col*2  --> */}
          <div class="row py-5 ">
            <div class="col-md-5 text-center order-md-2 mt-5 ">
              <img src={fox} alt="my-image" width="80%" />
            </div>
            <div class="col-md-7 mt-5 pt-5 ">
              Hi <span class="fw-bold">NARAYAN ARYAL</span>
              <div class="mt-2 mb-5 fs-4 fw-bold">
                {" "}
                software Engineer | Full stack developer
              </div>
              <p class="text-center">
                I love coding and enjoy myself working on projects. I like to
                solve problems and I have positive attitude.
              </p>
              <button class="btn btn-danger">
                {" "}
                Download Resume <i class="fa-solid fa-download"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
