import styled from "styled-components/native";
import MapView from "react-native-maps";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #eaeaea;
`;

export const Map = styled(MapView)`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 8px 0;
`;

export const HeaderText = styled.Text`
  flex: 1;
  text-align: center;

  font-family: "RobotoSlab_700Bold";
  font-size: 20px;
  color: #01381b;
`;
