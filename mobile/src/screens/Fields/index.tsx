import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { Feather } from "@expo/vector-icons";

import { Container, Map, Header, HeaderText } from "./styles";

interface CurrentRegionProps {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const Fields: React.FC = () => {
  const [coordsGetted, setCoordsGetted] = useState(false);
  const [currentRegion, setCurrentRegion] = useState<CurrentRegionProps>(
    null || ({} as CurrentRegionProps),
  );

  const navigation = useNavigation();

  useEffect(() => {
    async function loadInitialPosition(): Promise<void> {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync();

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.014,
          longitudeDelta: 0.014,
        });

        setCoordsGetted(true);
      } else {
        navigation.goBack();
      }
    }

    loadInitialPosition();
  }, [navigation, currentRegion]);

  return (
    <Container>
      <Header>
        <Feather
          name="arrow-left"
          size={32}
          color="#037e3f"
          style={{ marginLeft: 8 }}
          onPress={() => navigation.goBack()}
        />

        <HeaderText>Encontre no mapa um campo</HeaderText>
      </Header>

      {coordsGetted ? (
        <Map initialRegion={currentRegion} />
      ) : (
        <Text>Carregando mapa...</Text>
      )}
    </Container>
  );
};

export default Fields;
