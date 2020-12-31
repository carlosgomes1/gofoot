import React, { useEffect, useState, useRef } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";
import { FormHandles } from "@unform/core";

import Header from "../../components/Header";
import Options from "../../components/Options";
import Input from "../../components/Input";

import { Container, Content, InputContainer, MapContainer } from "./styles";

const New: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const formRef = useRef<FormHandles>(null);

  function handleMapClick(event: LeafletMouseEvent): void {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
    formRef.current?.setFieldValue("latitude", event.latlng.lat);
    formRef.current?.setFieldValue("longitude", event.latlng.lng);
  }

  function handleSubmit(data: string | unknown): void {
    console.log(initialPosition[0], initialPosition[1]);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  return (
    <Container>
      <Header />
      <Options selected="new" />

      <Content ref={formRef} onSubmit={handleSubmit}>
        <InputContainer>
          <span>Nome da quadra</span>
          <Input name="name" />
        </InputContainer>
        <InputContainer>
          <span>Logradouro</span>
          <Input name="logradouro" />
        </InputContainer>
        <InputContainer>
          <span>Número</span>
          <Input name="number" />
        </InputContainer>
        <InputContainer>
          <span>Complemento</span>
          <Input name="complement" />
        </InputContainer>

        <Map
          center={initialPosition}
          zoom={13}
          style={{ width: "100%", height: 500 }}
          onClick={handleMapClick}
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={selectedPosition} />
        </Map>

        <InputContainer>
          <span>Latitude</span>
          <Input name="latitude" />
        </InputContainer>
        <InputContainer>
          <span>Longitude</span>
          <Input name="longitude" />
        </InputContainer>

        <button type="submit">Criar campo</button>
      </Content>
    </Container>
  );
};

export default New;
