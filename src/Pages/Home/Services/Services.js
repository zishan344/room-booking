import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
const Services = () => {
  const [roam, setRoam] = useState([]);
  useEffect(() => {
    fetch("hoteInfo.json")
      .then((res) => res.json())
      .then((data) => setRoam(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-primary">Total Roam {roam.length}</h2>
      <div className="row">
        {roam.map((roam) => (
          <Service key={roam._id} roam={roam}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
