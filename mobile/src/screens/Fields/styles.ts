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

export const MarkerContainer = styled.View`
  align-items: center;

  background-color: #fff;
  padding: 8px;
  border-radius: 8px;

  border: 1px solid #037e3f;
`;

export const MarkerText = styled.Text`
  font-family: "RobotoSlab_700Bold";
  font-size: 12px;
  color: #01381b;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
