import Styles from "./Styles.module.scss";
export default function Container({ children }) {
  return <div className={Styles.container}>{children}</div>;
}
