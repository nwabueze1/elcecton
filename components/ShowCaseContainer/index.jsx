import React from "react";
import ShowCase from "../ShowCase";
import Styles from "./Styles.module.scss";
export default function ShowCaseContainer() {
  const data = [
    {
      image: "/showcase/ball-sm.png",
      title: "Speaker",
      subTitle: "(6 items)",
    },
    {
      image: "/showcase/laptop-sm.png",
      title: "Desktop and Laptop",
      subTitle: "(6 items)",
    },
    {
      image: "/products/camera.png",
      title: "DSLR camera",
      subTitle: "(6 items)",
    },
  ];
  return (
    <div className={Styles.container}>
      {data.map((item, index) => (
        <ShowCase
          image={item.image}
          subTitle={item.subTitle}
          title={item.title}
          key={index}
          alt={item.title}
        />
      ))}
    </div>
  );
}
