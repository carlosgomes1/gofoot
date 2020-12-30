import React from "react";

import {
  Container,
  HeaderDiv,
  Content,
  Navbar,
  NavItem,
  Divisor,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#037e3f"
          fillOpacity="0.9"
          d="M0,96L18.5,117.3C36.9,139,74,181,111,202.7C147.7,224,185,224,222,208C258.5,192,295,160,332,133.3C369.2,107,406,85,443,112C480,139,517,213,554,234.7C590.8,256,628,224,665,218.7C701.5,213,738,235,775,218.7C812.3,203,849,149,886,144C923.1,139,960,181,997,208C1033.8,235,1071,245,1108,229.3C1144.6,213,1182,171,1218,165.3C1255.4,160,1292,192,1329,218.7C1366.2,245,1403,267,1422,277.3L1440,288L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"
        />
      </svg>

      <HeaderDiv>
        <Content>
          <h1>Hello, World!</h1>
          <Navbar>
            <NavItem>Login</NavItem>
            <Divisor />
            <NavItem>Cadastre-se</NavItem>
          </Navbar>
        </Content>
      </HeaderDiv>
    </Container>
  );
};

export default Header;
