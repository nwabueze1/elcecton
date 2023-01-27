import { RemoveRedEye } from "@mui/icons-material";
import Image from "next/image";
import Styles from "./Styles.module.scss";

export default function PopularProducts() {
  return (
    <div className={Styles.container}>
      <article className={Styles.card}>
        <Image src={"/products/camera.png"} height={173.1} width={187.86} />
        <div className={Styles.button_group}>
          <div className={Styles.button}>
            Add to cart
            <Image src="/cart.png" height={30} width={30} alt="cart" />
          </div>
          <div className={Styles.button}>
            <RemoveRedEye style={{ fontSize: 30 }} />
          </div>
        </div>
      </article>
    </div>
  );
}
