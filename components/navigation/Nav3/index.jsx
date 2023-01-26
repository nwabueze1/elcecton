import Container from "@/components/Container";
import { KeyboardArrowDown } from "@mui/icons-material";
import NavList from "../NavList";
import NavListItem from "../NavListItem";
import Styles from "./Styles.module.scss";

export default function Navbar3() {
  return (
    <div className={Styles.nav__container}>
      <Container>
        <nav className={Styles.nav_bar}>
          <div className={Styles.nav__category}>
            <p>Browse categories</p>{" "}
            <KeyboardArrowDown style={{ marginLeft: 5 }} />
          </div>
          <NavList>
            <NavListItem href="/" color="black" fontSize={18}>
              Home
            </NavListItem>
            <NavListItem href="/" color="black" fontSize={16}>
              Catalog
            </NavListItem>
            <NavListItem href="/" color="black" fontSize={16}>
              Blog
            </NavListItem>
            <NavListItem href="/" color="black" fontSize={16}>
              Pages
            </NavListItem>
            <NavListItem href="/" color="black" fontSize={16}>
              About us
            </NavListItem>
          </NavList>
          <p className={Styles.free_return}>30 days free return</p>
        </nav>
      </Container>
    </div>
  );
}
