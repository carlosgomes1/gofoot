import React, { useEffect, useState, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Map, Marker, TileLayer } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import Header from "../../components/Header";
import Options from "../../components/Options";
import Input from "../../components/Input";

import getValidationErrors from "../../utils/getValidationErrors";
import api from "../../services/api";

import { useAuth } from "../../hooks/auth";

import { Container, Content, InputContainer } from "./styles";

interface DataFormProps {
  name: string;
  logradouro: string;
  number: string;
  complement?: string;
  latitude: string;
  longitude: string;
}

const New: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const { token } = useAuth();
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  function handleMapClick(event: LeafletMouseEvent): void {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
    formRef.current?.setFieldValue("latitude", event.latlng.lat);
    formRef.current?.setFieldValue("longitude", event.latlng.lng);
  }

  const sendData = useCallback(
    async (data: DataFormProps) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await api.post("/field", data, config);
      history.push("/");
    },
    [token, history],
  );

  const handleSubmit = useCallback(
    async (data: DataFormProps) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("O nome da quadra é obrigatório"),
          logradouro: Yup.string().required("O logradouro é obrigatório."),
          number: Yup.string().required("O número é obrigatório."),
          complement: Yup.string(),
          latitude: Yup.number().required("A latitude é obrigatório."),
          longitude: Yup.number().required("A longitude é obrigatório."),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        sendData(data);
      } catch (err) {
        const errors = getValidationErrors(err);

        console.log(err);

        formRef.current?.setErrors(errors);
      }
    },
    [sendData],
  );

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
          style={{ width: "100%", height: 500, margin: "8px 0" }}
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
