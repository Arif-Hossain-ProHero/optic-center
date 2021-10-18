import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-800 flex justify-around px-5 text-white p-9">
        {/* contact */}
        <div>
          <h2 className="text-blue-700 pb-4 text-2xl font-semibold">Contact</h2>
          <div>
            <div className="mb-3">
              <h3>Phone</h3>
              <h3>+555555555</h3>
            </div>
            <div className="mb-3">
              <h3>Email</h3>
              <h3>support@optic-center.com</h3>
            </div>
            <div>
              <h3>Address</h3>
              <address>123, Mirpur, Dhaka-1200</address>
            </div>
          </div>
        </div>
        {/* about */}
        <div>
          <h2 className="text-blue-700 pb-4 text-2xl font-semibold">About</h2>
          <div className="flex flex-col leading-8">
            <Link to="/doctors">Doctors</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/departments">Departments</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h2 className="text-blue-700 pb-4 text-2xl font-semibold">Explore</h2>
          <div className="flex flex-col leading-8">
            <Link to="/blog">Blog</Link>
            <Link to="/appointment">Appointment</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/support">Support</Link>
            <Link to="/online-support">Online Support</Link>
            <Link to="/free-consultancy">Free Consultancy</Link>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="bg-gray-600 text-center p-2 text-center">
        <p>
          Copyright &copy; 2021. All Rights Reserved By Optic-center.{" "}
          <Link to="/policy">Privacy Policy.</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
