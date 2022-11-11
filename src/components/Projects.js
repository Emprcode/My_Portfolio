import React from "react";

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
              <img
                src="./assets/img11.png"
                alt="portfolio project"
                width="60%"
              />
            </div>
            <div class="col">
              <h2> Project 1</h2>
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
          {/* <!-- project2 --> */}
          <div class="row py-5 ">
            <div class="col-md order-md-2 mb-3">
              <img
                src="./assets/img3.png"
                alt="portfolio project"
                width="60%"
              />
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
              <img
                src="./assets/img3.png"
                alt="portfolio project"
                width="60%"
              />
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
        </div>
      </div>
    </div>
  );
};
