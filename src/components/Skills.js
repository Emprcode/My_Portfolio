import React from "react";

export const Skills = () => {
  return (
    <div>
      <section id="skills" class="container py-4">
        <div class="row">
          <div class="col">
            {/* <!-- title  --> */}
            <div class="title">
              <span>SKILLS</span>
            </div>
            {/* <!-- icons  --> */}
            <div class="icons ">
              <div>
                <i class="fa-brands fa-html5 text-danger"></i>HTML
              </div>
              <div>
                {" "}
                <i class="fa-brands fa-css3-alt text-primary"></i>CSS
              </div>
              <div>
                {" "}
                <i class="fa-brands fa-js text-warning"></i>JavaScript
              </div>
              <div>
                {" "}
                <i class="fa-brands fa-bootstrap text-success"></i> BOOTSTRAP
              </div>
              <div>
                <i class="fa-brands text-primary fa-python"></i> PYTHON
              </div>
              <div>
                <i class="fa-brands fa-figma"></i> FIGMA
              </div>
              <div>
                <i class="fa-brands fa-react"></i>REACT
              </div>
              <div>
                <i class="fa-brands fa-node-js"></i>NODE
              </div>
              <div>
                <i class="fa-solid fa-database"></i>MONGODB
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
