import React from "react";
import fox from "../assets/fox.jpg";
import { Layout } from "./Layout";

export const Hero = () => {
  return (
    <>
       <Layout>
      <section className="hero py-5">
        <div className="container">
          {/* <!-- .row>.col*2  --> */}
          <div className="row py-5 ">
            <div className="col-md-5 text-center order-md-2 mt-5 ">
              <img src={fox} alt="my-image" width="80%" />
            </div>
            <div className="col-md-7 mt-5 pt-5 ">
              Hi <span className="fw-bold">NARAYAN ARYAL</span>
              <div className="mt-2 mb-5 fs-4 fw-bold">
                {" "}
                software Engineer | Full stack developer
              </div>
              <p className="text-center">
                I love coding and enjoy myself working on projects. I like to
                solve problems and I have positive attitude.
              </p>
              <button className="btn btn-danger">
                {" "}
                Download Resume <i className="fa-solid fa-download"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
};
