import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #eaeaea;
`;

export const InfoContainer = styled.View`
  margin-top: 16px;
`;

export const Label = styled.Text`
  color: #aaaaaa;
  font-size: 20px;
  font-family: "RobotoSlab_400Regular";
`;

export const Title = styled.Text`
  color: #037e3f;
  font-size: 24px;
  font-family: "RobotoSlab_500Medium";
`;

export const Content = styled.View`
  padding: 16px;
`;

export const ResponsaveisContainer = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;

export const ResponsaveisTitle = styled.Text`
  color: #037e3f;
  font-size: 24px;
  font-family: "RobotoSlab_400Regular";

  margin-bottom: 16px;
`;

export const ResponsavelItem = styled.View`
  border: 0.5px solid #037e3f;
  border-radius: 8px;

  margin: 4px 0;
  padding: 8px;
`;

export const ResponsavelName = styled.Text`
  color: #333;
  font-size: 30px;
  font-family: "RobotoSlab_500Medium";

  text-align: center;
`;

export const ContactContainer = styled.View`
  margin: 2px 0;

  flex-direction: row;
  align-items: center;
`;

export const ContactValue = styled.Text`
  color: #333;
  font-size: 20px;
  font-family: "RobotoSlab_400Regular";
`;
