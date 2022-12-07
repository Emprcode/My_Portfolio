import React from "react";
import { motion } from "framer-motion";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

export const Projects = () => {
  return (
    <div>
      <div id="projects" class="projects py-3">
        <div class="title">
          <span>Projects</span>
        </div>
        <div class="container">
          {/* <!-- project1 --> */}
          <div class="row">
            <div class="col-md">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img src={p1} alt="portfolio project" width="90%" />
              </motion.div>
            </div>
            <div class="col">
              <h2> Time Management App (NOT-TO-DO-LIST)</h2>
              <div class="fs-2">
                <a href="">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p class="mt-3 text-center fw-bold">
                Tech Used: HTML, CSS, Javascript, Bootstrap, React, Node,
                MongoDB
              </p>
              <p>
                This NOT-TO-DO-LIST app helps user to track their time spend in
                a week. It helps user to keep track of time spent weekly in
                different activities in terms of good or bad.
              </p>
            </div>
          </div>
          {/* <!-- project2 --> */}
          <div class="row py-5 ">
            <div class="col-md order-md-2 mb-3">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img src={p2} alt="portfolio project" width="60%" />
              </motion.div>
            </div>
            <div class="col">
              <h2> Project 2</h2>
              <div class="fs-2">
                <a href="">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p class="mt-3 text-center fw-bold">
                Tech Used: HTML, CSS, Javascript, Bootstrap, GitHub
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                praesentium soluta magnam iure, tempora minus, earum fugiat quia
                incidunt ipsa cupiditate excepturi asperiores assumenda ad enim
                aliquam officiis aut fugit!
              </p>
            </div>
          </div>

          {/* <!-- project3 --> */}
          <div class="row">
            <div class="col-md">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img src={p3} alt="portfolio project" width="60%" />
              </motion.div>
            </div>
            <div class="col">
              <h2> Project 3</h2>
              <div class="fs-2">
                <a href="">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p class="mt-3 text-center fw-bold">
                Tech Used: HTML, CSS, Javascript, Bootstrap, GitHub
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                praesentium soluta magnam iure, tempora minus, earum fugiat quia
                incidunt ipsa cupiditate excepturi asperiores assumenda ad enim
                aliquam officiis aut fugit!
              </p>
            </div>
          </div>

          {/* project4 */}
          <div class="row py-5 ">
            <div class="col-md order-md-2 mb-3">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img src={p4} alt="portfolio project" width="90%" />
              </motion.div>
            </div>
            <div class="col">
              <h2> Project 2</h2>
              <div class="fs-2">
                <a href="">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p class="mt-3 text-center fw-bold">
                Tech Used: HTML, CSS, Javascript, Bootstrap, GitHub
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                praesentium soluta magnam iure, tempora minus, earum fugiat quia
                incidunt ipsa cupiditate excepturi asperiores assumenda ad enim
                aliquam officiis aut fugit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
