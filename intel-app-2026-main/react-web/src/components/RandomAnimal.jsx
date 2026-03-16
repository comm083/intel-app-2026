import React, { useEffect, useState } from "react";
import coolcat from "../assets/coolcat.jpg";
import coolquokka from "../assets/coolquokka.jpg";
import coolhamster from "../assets/coolhamster.jpg";

function RandomAnimal() {
  const [animal, setAnimal] = useState({});

  useEffect(() => {
    async function getData() {
      const url = "http://127.0.0.1:8000/animal";
      const response = await fetch(url);
      const data = await response.json();
      setAnimal(data);
    }
    getData();
  }, []);

  console.log(animal.characteristics + animal.animal);

  const animal_img = [
    {
      id: "쿨한고양이",
      srcLink: coolcat,
    },
    {
      id: "쿨한쿼카",
      srcLink: coolquokka,
    },
    {
      id: "쿨한햄스터",
      srcLink: coolhamster,
    },
    {
      id: "용감한고양이",
      srcLink: coolcat,
    },
    {
      id: "용감한쿼카",
      srcLink: coolquokka,
    },
    {
      id: "용감한햄스터",
      srcLink: coolhamster,
    },
    {
      id: "귀여운고양이",
      srcLink: coolcat,
    },
    {
      id: "귀여운쿼카",
      srcLink: coolquokka,
    },
    {
      id: "귀여운햄스터",
      srcLink: coolhamster,
    },
    {
      id: "느긋한고양이",
      srcLink: coolcat,
    },
    {
      id: "느긋한쿼카",
      srcLink: coolquokka,
    },
    {
      id: "느긋한햄스터",
      srcLink: coolhamster,
    },
  ];

  const selectedImg = animal_img.find(
    (img) => img.id === animal.characteristics + animal.animal,
  );

  if (!selectedImg) return <div>Loading...</div>;
  console.log(selectedImg);
  console.log(selectedImg.srcLink);

  return (
    <div>
      <img
        src={selectedImg.srcLink}
        alt={selectedImg.id}
        className="w-40 h-40 object-cover rounded-lg"
      />
      ;
    </div>
  );
}

export default RandomAnimal;
