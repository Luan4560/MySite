import React from "react";
import logoImg from "../../assets/Logo.svg";
import { Container, Content } from "./style";

const Header = () => {
  return (
    <Container>
      <Content>
     <div>

        <a href="Home">
        <img href="Home" src={logoImg} alt="logo" />
        </a>
     </div>
    

        <div className="nav-header">
          <ul>
            <li>
              <a href="Home">Home</a>
            </li>
            <li>
              <a href="Portifólio">Portifólio</a>
            </li>
            <li>
              <a href="Contat">Contato</a>
            </li>
          </ul>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
