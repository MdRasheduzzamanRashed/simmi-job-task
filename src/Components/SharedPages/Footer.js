import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content ">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link
          title="https://twitter.com/Rasheduzzaman_"
          to="https://twitter.com/Rasheduzzaman_"
        >
          <FaTwitter />
        </Link>
        <Link
          title="https://www.facebook.com/mdrasheduzzaman7797"
          to="https://www.facebook.com/mdrasheduzzaman7797"
        >
          <FaFacebook />
        </Link>

        <Link
          title="https://www.linkedin.com/in/mrashedcse"
          to="https://www.linkedin.com/in/mrashedcse"
        >
          <FaLinkedin />
        </Link>

        <Link
          title="https://github.com/MdRaseduzzamanZibon"
          to="https://github.com/MdRaseduzzamanZibon"
        >
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
