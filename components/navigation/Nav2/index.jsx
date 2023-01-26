import Container from "@/components/Container";
import SearchBar from "@/components/Searchbar";
import { Person, ShoppingBasket } from "@mui/icons-material";
import Image from "next/image";
import NavList from "../NavList";
import NavListItem from "../NavListItem";
import Styles from "./Styles.module.scss";
export default function Navbar2() {
  return (
    <div className={Styles.nav_container}>
      <Container>
        <nav className={Styles.navbar}>
          <Image src={"/Logo1.png"} height={39} width={149} alt="logo" />
          <SearchBar placeholder={"Search any things"} />
          <NavList>
            <NavListItem color="white" StartIcon={Person} href="/">
              Sign in
            </NavListItem>
            <NavListItem color="white" StartIcon={Person} href="/">
              Sign in
            </NavListItem>
            <NavListItem color="white" StartIcon={ShoppingBasket} href="/">
              Cart
            </NavListItem>
          </NavList>
        </nav>
      </Container>
    </div>
  );
}
