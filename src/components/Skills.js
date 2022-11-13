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
                {" "}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Learn/HTML"
                  target="_blank"></a>{" "}
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
              {/* <!-- <div><i class="fa-brands fa-python"></i> PYTHON</div> --> */}
              <div>
                <i class="fa-brands fa-figma"></i> FIGMA
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
