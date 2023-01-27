import Image from "next/image";
import React from "react";
import Styles from "./Styles.module.scss";

export default function ShowCase({ image, alt = "image", title, subTitle }) {
  return (
    <div className={Styles.show_case}>
      <Image src={image} height={94} width={154} alt={alt} />
      <div style={{ color: "#265F7F" }}>
        <h4
          style={{
            fontSize: "22.38px",
            fontWeight: "bold",
          }}
        >
          {title}
        </h4>
        <p
          style={{ fontSize: "18.824px", fontWeight: "500", color: "#265F7F" }}
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
}
