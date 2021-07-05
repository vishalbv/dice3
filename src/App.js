import "./App.scss";
import Routes from "./routes";
import { BrowserRouter as Router, Switch, useHistory } from "react-router-dom";
import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import appLogo from "./assets/Group 4.svg";
import { ReactComponent as TelegramIco } from "./assets/telegram_app (1).svg";
import { ReactComponent as TwitterIco } from "./assets/twitter (2).svg";
import { ReactComponent as EmailIco } from "./assets/email.svg";
import AOS from "aos";

function openLink(id) {}

const Header = ({ style, active = "Home" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();
  // const DropdownTitle = (
  //   <span>
  //     Links
  //     <img src={downIco} style={{ marginLeft: "10px", width: "10px" }} />
  //   </span>
  // );

  return (
    <Navbar expand="lg">
      <Navbar.Brand
        onClick={() => {
          // openLink("token");
          history.push("/");
        }}
      >
        <img src={appLogo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link
            onClick={() => {
              openLink("home");
            }}
            style={{ color: active == "Home" ? "#ff6002" : "inherit" }}
          >
            Games
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              openLink("faq");
            }}
          >
            FAQ
          </Nav.Link>
          <div className="flex-x">
            <Nav.Link
              onClick={() => {
                openLink("token");
              }}
            >
              <TelegramIco />
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                openLink("token");
              }}
            >
              <TwitterIco />
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                openLink("token");
              }}
            >
              <EmailIco />
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

function App() {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Routes />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
