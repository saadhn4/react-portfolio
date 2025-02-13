import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Currently in my final year of Computer Applications, diving deep
                into the world of web development with a focus on the MERN stack
                (MongoDB, Express.js, React.js, Node.js) I thrive on building
                efficient, scalable, and user-friendly applications that bring
                ideas to life.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
