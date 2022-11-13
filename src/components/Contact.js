import React from "react";
import { Layout } from "./Layout";

export const Contact = () => {
  return (
    <Layout>
      <div id="contact" class="container contact rounded-5 p-3 mt-5">
        <div class="title">
          <span> CONTACT ME</span>
        </div>

        {/* <!-- icons to link  --> */}

        <div class="row mb-5">
          <div class="col fa-3x d-flex justify-content-between px-5">
            <a href="https://www.linkedin.com/in/naryal/" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:your@email.com" target="_blank">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
