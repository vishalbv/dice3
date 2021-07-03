import "./App.scss";
import Routes from "./routes";
import { BrowserRouter as Router, Switch, useHistory } from "react-router-dom";
import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import appLogo from "./assets/Group 4.svg";
import { ReactComponent as TelegramIco } from "./assets/telegram_app (1).svg";
import { ReactComponent as TwitterIco } from "./assets/twitter (2).svg";
import { ReactComponent as EmailIco } from "./assets/email.svg";

function scrollToTargetAdjusted(id) {
  const element = document.getElementById(id);
  const offset = 100;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

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
          // scrollToTargetAdjusted("token");
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
              scrollToTargetAdjusted("home");
            }}
            style={{ color: active == "Home" ? "#ff6002" : "inherit" }}
          >
            Games
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              scrollToTargetAdjusted("token");
            }}
          >
            FAQ
          </Nav.Link>
          <div className="flex-x">
            <Nav.Link
              onClick={() => {
                scrollToTargetAdjusted("token");
              }}
            >
              <TelegramIco />
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                scrollToTargetAdjusted("token");
              }}
            >
              <TwitterIco />
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                scrollToTargetAdjusted("token");
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
