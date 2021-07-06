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
import Lang1 from "./assets/us.026a8970.svg";
import Lang2 from "./assets/download (1).svg";
import Lang3 from "./assets/cn.d09f389e.svg";

function openLink(id) {}

const Header = ({
  style,
  active = "Home",
  languages,
  setLanguage,
  language,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();
  const DropdownTitle = (
    <span>
      <img src={language.src} style={{ marginLeft: "10px", width: "25px" }} />
    </span>
  );

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
          <NavDropdown
            title={DropdownTitle}
            id="basic-nav-dropdown-1"
            onMouseEnter={() => {
              setMenuOpen(true);
            }}
            onMouseLeave={() => {
              setMenuOpen(false);
            }}
            show={menuOpen}
          >
            <div className="custom-dropdown">
              {languages.map((i, k) => (
                <NavDropdown.Item
                  key={k}
                  onClick={() => {
                    setMenuOpen(false);
                    setLanguage(i);
                  }}
                >
                  <img src={i.src} style={{ margin: "10px", width: "25px" }} />
                  {i.name}
                </NavDropdown.Item>
              ))}
            </div>
          </NavDropdown>
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
  const languages = [
    { name: "english", src: Lang1 },
    { name: "abc", src: Lang2 },
    { name: "xyz", src: Lang3 },
  ];
  const [language, setLanguage] = useState(languages[0]);
  return (
    <div className="App">
      <Router>
        <Header
          language={language}
          setLanguage={setLanguage}
          languages={languages}
        />

        <Switch>
          <Routes />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
