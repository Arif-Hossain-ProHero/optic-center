import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./fakeDb.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-12">
      <h1 className="text-center text-4xl font-semibold mb-12 underline ">
        Our Services
      </h1>
      <div className="md:grid grid-cols-3 gap-8 container mx-auto">
        {services.map((service) => (
          <Service key={service.key} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
