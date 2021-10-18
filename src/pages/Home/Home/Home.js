import React from "react";
import useAuth from "../../../hooks/useAuth";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="top-section p-8 md:p-36 md:flex">
      <div className="w-3/5">
        <h2 className="text-2xl">Optic Eye Center</h2>
        <div className="py-5">
          <h1 className="text-6xl font-bold pb-7">
            We Only Give Best Care To Your Eyes
          </h1>
          <p className="leading-7 pb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
            debitis amet doloribus harum voluptatibus totam voluptate magni est
            nemo illum.
          </p>
        </div>
        <div>
          <button className="rounded-full bg-gray-800 py-3 px-6 text-white">
            Get An Appoinment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
