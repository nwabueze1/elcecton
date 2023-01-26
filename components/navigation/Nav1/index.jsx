import Container from "@/components/Container";
import { BusAlert, GpsFixed, LocationCityOutlined } from "@mui/icons-material";
import NavList from "../NavList";
import NavListItem from "../NavListItem";
import Styles from "./Style.module.scss";

export default function Navbar1() {
  return (
    <div className={Styles.nav_container}>
      <Container>
        <nav className={Styles.nav}>
          <p>Need help? Call us: (+234) 9032295542</p>

          <NavList>
            <NavListItem href={"/"} StartIcon={GpsFixed}>
              Our store
            </NavListItem>
            <NavListItem href={"/"} StartIcon={BusAlert}>
              Track your order
            </NavListItem>
          </NavList>
        </nav>
      </Container>
    </div>
  );
}
