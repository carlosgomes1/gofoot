import React from "react";

import Header from "../../components/Header";

import HomeSVG from "../../assets/images/home.svg";

import { Container, Content, ImageSVG, Main } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Main>
          <h1>
            Cadastre sua quadra para milhares de pessoas visualizarem e entrarem
            em contato.
          </h1>
          <p>
            Todos os dias tem gente procurando um lugar bacana para{" "}
            <span>jogar futebol</span> com os amigos, e as vezes uma coisa
            simples se torna em uma <span>dor de cabeça gigante</span>.
          </p>
          <p>
            O <span>gofoot!</span> foi criado para fazer o match entre quem joga
            futebol com quem oferece o espaço. Com apenas alguns passos simples
            sua quadra já está disponível no app.{" "}
            <span>Inscreva-se agora mesmo!</span>
          </p>
        </Main>
        <ImageSVG src={HomeSVG} />
      </Content>
    </Container>
  );
};

export default Home;
