import React from "react";
import about from "../assets/about.jpg";
import { Layout } from "./Layout";

export const AboutMe = () => {
  return (
    <Layout>
    <div id="about-me" class="container">
       
      <div class="title">
        <span>ABOUT ME</span>
      </div>
      <div class="row">
        <div class="col-md-4 mb-3">
          <img src={about} alt="some img" width="50%" />
        </div>
        <div class="col-md-8 text-center">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo fuga
            nemo ullam repellat vero ex obcaecati inventore eos ipsam,
            praesentium totam repellendus neque pariatur doloribus possimus
            adipisci id assumenda sint?{" "}
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit eaque quis assumenda optio dolorem ipsum ducimus quasi
            saepe, voluptas, dolore voluptate expedita culpa nam qui? Ex quis
            quia numquam eum.
          </p>
        </div>
      </div>
    </div>
    </Layout>
  );
};
