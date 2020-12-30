import React from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { FaWhatsapp, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

import { Container, Content } from "./styles";

import JogadorSVG from "../../assets/images/jogador-de-futebol.svg";

import Header from "../../components/Header";
import Input from "../../components/Input";

const Register: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <img src={JogadorSVG} alt="Jogador de futebol" />
        <div>
          <h1>Registre-se aqui!</h1>
          <form>
            <Input placeholder="E-mail" name="email" icon={FiMail} />
            <Input placeholder="Senha" name="password" icon={FiLock} />
            <Input placeholder="WhatsApp" name="whatsapp" icon={FaWhatsapp} />
            <Input placeholder="Estado" name="uf" icon={FaMapMarkerAlt} />
            <Input placeholder="Cidade" name="city" icon={FaBuilding} />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </Content>
    </Container>
  );
};

export default Register;
