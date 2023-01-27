import Image from "next/image";
import Button from "../Button";
import Styles from "./Styles.module.scss";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className={Styles.hero}>
      <div>
        <h1>Canon Camera</h1>
        <div></div>
        <div className={Styles.buttonGroup}>
          <Button>Shop now</Button>
          <Button
            bgColor={"white"}
            color="#316887"
            border={"1px solid #316887"}
          >
            view more
          </Button>
        </div>
      </div>
      <Image src={"/products/camera.png"} height={356} width={331} />
    </section>
  );
}
