import React from "react";
import Image from "../../assets/img-site.png";
import { Container } from "./style";

const Main = () => {
  return (
    <Container>
      <div className="title">
        <h1>Luan Nascimento</h1>
        <h2>Web Developer</h2>
      </div>

      <div className="section">
        <img src={Image} alt="Imagem" />

        <p>
          Lorem IpsumLorem IpsuLorem IpsuLorem IpsuLorem IpsuLorem IpsuLorem
          IpsuLorem IpsuLorem IpsuLorem IpsuLorem IpsuLorem IpsuLorem IpsuLorem
          IpsuLorem IpsuLorem IpsuLorem IpsuLorem IpsuLorem IpsuLorem IpsuLorem
          Ipsu
        </p>
      </div>
    </Container>
  );
};

export default Main;
