import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Feather } from "@expo/vector-icons";

import Logo from "../../assets/images/logo.png";

import {
  Container,
  LogoPNG,
  Content,
  Title,
  Button,
  ButtonText,
} from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <View style={{ backgroundColor: "#037e3f", height: 160 }}>
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: "absolute", top: 140 }}
        >
          <Path
            fill="#037e3f"
            fill-opacity="1"
            d="M0,320L24,320C48,320,96,320,144,288C192,256,240,192,288,170.7C336,149,384,171,432,154.7C480,139,528,85,576,85.3C624,85,672,139,720,181.3C768,224,816,256,864,256C912,256,960,224,1008,213.3C1056,203,1104,213,1152,229.3C1200,245,1248,267,1296,250.7C1344,235,1392,181,1416,154.7L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          />
        </Svg>
        <LogoPNG source={Logo} />
      </View>
      <Content>
        <Title>
          Encontre quadras e campos de futebol próximos a você de forma fácil e
          rápida.
        </Title>
        <Button>
          <ButtonText>Abrir mapa</ButtonText>
          <Feather
            name="arrow-right"
            size={40}
            color="#eaeaea"
            style={{ alignSelf: "flex-end" }}
          />
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
