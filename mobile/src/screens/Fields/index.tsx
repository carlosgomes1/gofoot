import React, { useEffect, useState, useCallback } from "react";
import { Image, Animated, Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { Feather } from "@expo/vector-icons";
import { Marker } from "react-native-maps";

import {
  Container,
  Map,
  Header,
  HeaderText,
  MarkerContainer,
  MarkerText,
  LoadingContainer,
} from "./styles";
import BolaPNG from "../../assets/images/bola-de-futebol.png";
import Bola2PNG from "../../assets/images/bola-de-futebol2.png";

import api from "../../services/api";

interface CurrentRegionProps {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface FieldData {
  complement?: string;
  fkOwner: string;
  idField: string;
  latitude: number;
  longitude: number;
  logradouro: string;
  name: string;
  number: string;
}

interface ResponseFieldsData {
  fields: FieldData[];
}

const Fields: React.FC = () => {
  const [fields, setFields] = useState<FieldData[]>([]);
  const [coordsGetted, setCoordsGetted] = useState(false);
  const [currentRegion, setCurrentRegion] = useState<CurrentRegionProps>(
    null || ({} as CurrentRegionProps),
  );

  const navigation = useNavigation();

  const handleNavigateToDetail = useCallback(
    (idField: string) => {
      navigation.navigate("Detail", {
        idField,
      });
    },
    [navigation],
  );

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

  async function getFields(): Promise<void> {
    await api.get<ResponseFieldsData>("/field").then((response) => {
      setFields(response.data.fields);
    });
  }

  useEffect(() => {
    getFields();
  }, []);

  const rotateValueHolder = new Animated.Value(0);

  Animated.loop(
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }),
  ).start();
  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

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
        <Map initialRegion={currentRegion}>
          {fields.map((field) => (
            <Marker
              key={field.idField}
              coordinate={{
                latitude: field.latitude,
                longitude: field.longitude,
              }}
              onPress={() => handleNavigateToDetail(field.idField)}
            >
              <MarkerContainer>
                <Image source={BolaPNG} />
                <MarkerText>{field.name}</MarkerText>
              </MarkerContainer>
            </Marker>
          ))}
        </Map>
      ) : (
        <LoadingContainer>
          <Animated.Image
            source={Bola2PNG}
            style={{ transform: [{ rotate: rotateData }] }}
          />
        </LoadingContainer>
      )}
    </Container>
  );
};

export default Fields;
