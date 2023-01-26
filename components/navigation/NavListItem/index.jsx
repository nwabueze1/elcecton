import {
  ChevronLeft,
  KeyboardArrowDown,
  ShoppingBag,
} from "@mui/icons-material";
import Link from "next/link";
import Styles from "./Styles.module.scss";

export default function NavListItem({
  href,
  color = "#292D32",
  fontSize = "14px",
  StartIcon,
  endIcon,
  children,
}) {
  return (
    <li className={Styles.nav_list__item} style={{ color }}>
      {StartIcon && (
        <StartIcon
          style={{
            marginRight: 2,
            fontSize,
            margin: "auto",
            position: "relative",
            bottom: -5,
            paddingRight: 10,
          }}
        />
      )}
      <Link
        href={href}
        className={Styles.nav__link}
        style={{ margin: "auto", fontSize }}
      >
        {children}
      </Link>
    </li>
  );
}
