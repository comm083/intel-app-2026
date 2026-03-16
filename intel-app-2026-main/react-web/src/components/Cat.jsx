import React, { useEffect, useState } from "react";

function Cat() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function getData() {
      const url = "https://api.thecatapi.com/v1/images/search?limit=15";
      const response = await fetch(url);
      const data = await response.json();
      setCats(data);
      console.log(data);
    }
    getData();
  }, []);

  const imgs = cats.map((img) => (
    <img
      key={img.url}
      src={img.url}
      alt="cat"
      className="w-40 h-40 object-cover rounded-lg"
    />
  ));

  return (
    <div className="grid grid-cols-5 gap-4 justify-items-center">{imgs}</div>
  );
}

export default Cat;
