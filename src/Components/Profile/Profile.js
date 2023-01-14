import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Profile = () => {
  return (
    <div className="lg:py-14 flex flex-col items-center justify-center">
      <div className="avatar">
        <div className="w-52 mask mask-squircle">
          <img src="https://i.ibb.co/GdvWxHC/FD-43757-E.png" alt="Profile" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className=" text-3xl md:text-5xl uppercase font-bold ">
          Md. Rasheduzzaman
        </h1>
        <h4 className="font-semibold md:text-xl uppercase">
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "Mern stack developer",
                "Front End Developer",
                "Full Stack Developer",
                "React JS Developer",
                "JavaScript Developer",
                "Graphic Designer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h4>
        <p className=" text-lg">Skype: mdzibon</p>
        <p className=" text-lg">Mobile: +880 1789 861 009</p>
        <p className=" text-lg">WhatsApp: +880 1789 861 009</p>
        <p className=" text-lg">Email: rased.cse.2016@gmail.com</p>
        <p className=" text-lg">Address: Mohammadpur, Dhaka-1207, Bangladesh</p>
        <div className="flex gap-3 text-2xl">
          <Link
            className=" hover:bg-slate-400 p-2 rounded-lg hover:bg-opacity-20"
            title="https://twitter.com/Rasheduzzaman_"
            to="https://twitter.com/Rasheduzzaman_"
          >
            <FaTwitter />
          </Link>
          <Link
            className=" hover:bg-slate-400 p-2 rounded-lg hover:bg-opacity-20"
            title="https://www.facebook.com/mdrasheduzzaman7797"
            to="https://www.facebook.com/mdrasheduzzaman7797"
          >
            <FaFacebook />
          </Link>
          <Link
            className=" hover:bg-slate-400 p-2 rounded-lg hover:bg-opacity-20"
            title="https://www.instagram.com/m_rasheduzzaman_009"
            to="https://www.instagram.com/m_rasheduzzaman_009"
          >
            <FaInstagram />
          </Link>
          <Link
            className=" hover:bg-slate-400 p-2 rounded-lg hover:bg-opacity-20"
            title="https://www.linkedin.com/in/mrashedcse"
            to="https://www.linkedin.com/in/mrashedcse"
          >
            <FaLinkedin />
          </Link>
          <Link
            className=" hover:bg-slate-400 p-2 rounded-lg hover:bg-opacity-20"
            title="https://www.youtube.com/channel/UC3sy7-a8zue9rB78pH0ivmg"
            to="https://www.youtube.com/channel/UC3sy7-a8zue9rB78pH0ivmg"
          >
            <FaYoutube></FaYoutube>
          </Link>
          <Link
            className=" hover:bg-slate-400 p-2 rounded-lg hover:bg-opacity-20"
            title="https://github.com/MdRaseduzzamanZibon"
            to="https://github.com/MdRaseduzzamanZibon"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
