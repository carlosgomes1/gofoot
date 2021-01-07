import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const LogoPNG = styled.Image`
  margin-top: 8px;
`;

export const Content = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  padding: 12px;
`;

export const Title = styled.Text`
  font-family: "RobotoSlab_500Medium";
  font-size: 32px;

  margin-bottom: 24px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #037e3f;
  width: 120px;
  height: 130px;

  padding: 8px;

  border-radius: 16px;

  justify-content: space-between;

  position: absolute;
  bottom: 16px;
  right: 16px;
`;

export const ButtonText = styled.Text`
  color: #eaeaea;
  font-family: "RobotoSlab_500Medium";
  font-size: 24px;
`;
