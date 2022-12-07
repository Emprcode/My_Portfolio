import React from "react";
import image from "../assets/my_image.jpeg";
import resume from "../assets/Resume.pdf";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div>
      <section class="hero">
        <div class="container">
          {/* <!-- .row>.col*2  --> */}
          <div class="row py-5 ">
            <div class="col-md-5 text-center order-md-2 mt-5 ">
              <img src={image} alt="my-image" width="80%" />
            </div>
            <div class="col-md-7 mt-5 pt-5 ">
              Hi
              <span className=" fs-6 fw-bold">
                <motion.h3
                  initial={{ x: -100 }}
                  animate={{ x: 100 }}
                  transition={{ ease: "easeIn", duration: 1 }}>
                  NARAYAN ARYAL
                </motion.h3>
              </span>
              <div className="mt-2 mb-5 fs-4 fw-bold">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}>
                  software Engineer | Full stack developer
                </motion.div>
              </div>
              <p class="text-center">
                I love coding and enjoy myself working on projects. I like to
                solve problems and I have positive attitude.
              </p>
              <a href={resume} download={true}>
                <button className="btn btn-danger">
                  Download Resume <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
