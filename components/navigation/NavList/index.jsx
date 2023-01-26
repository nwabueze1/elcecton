import Styles from "./styles.module.scss";

export default function NavList({ children }) {
  return <ul className={Styles.nav_list}>{children}</ul>;
}
