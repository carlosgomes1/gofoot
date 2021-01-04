import React, { useEffect, useCallback, useState, useRef } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import { Container, Content, Update, InputContainer, Left } from "./styles";

import api from "../../services/api";
import getValidationErrors from "../../utils/getValidationErrors";

import { useAuth } from "../../hooks/auth";
import { useField } from "../../hooks/field";

import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Input from "../../components/Input";

interface Responsible {
  idResponsible: string;
  name: string;
  fkField: string;
}

interface ResponseDataField {
  complement?: string;
  fkOwner: string;
  idField: string;
  latitude: number;
  longitude: number;
  logradouro: string;
  number: string;
  name: string;
  responsibles: Responsible[];
}

interface DataFormProps {
  name: string;
  logradouro: string;
  number: string;
  complement?: string;
  latitude: number;
  longitude: number;
}

const Field: React.FC = () => {
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [field, setField] = useState<ResponseDataField>(
    {} as ResponseDataField,
  );

  const formRef = useRef<FormHandles>(null);
  const { token } = useAuth();
  const { field: fieldContext, attField } = useField();

  const sendUpdate = useCallback(
    async (data: DataFormProps) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await api.put(`/field/${field.idField}`, data, config);

      attField();
    },
    [token, field, attField],
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

        sendUpdate(data);
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [sendUpdate],
  );

  function handleMapClick(event: LeafletMouseEvent): void {
    setSelectedPosition([event.latlng.lat, event.latlng.lng] || [0, 0]);
    formRef.current?.setFieldValue("latitude", event.latlng.lat);
    formRef.current?.setFieldValue("longitude", event.latlng.lng);
  }

  useEffect(() => {
    setField(fieldContext);
    setSelectedPosition([
      fieldContext.latitude || 0,
      fieldContext.longitude || 0,
    ]);
  }, [fieldContext]);

  return (
    <Container>
      <Header />
      <Content>
        <Aside selected="field" />
        <Update>
          <Left
            ref={formRef}
            initialData={{
              name: field.name,
              logradouro: field.logradouro,
              number: field.number,
              complement: field.complement,
              latitude: field.latitude,
              longitude: field.longitude,
            }}
            onSubmit={handleSubmit}
          >
            <InputContainer>
              <span>Nome</span>
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
            <InputContainer>
              <span>Latitude</span>
              <Input name="latitude" />
            </InputContainer>
            <InputContainer>
              <span>Longitude</span>
              <Input name="longitude" />
            </InputContainer>
            <div>
              <button type="submit">Alterar</button>
            </div>
          </Left>
          <Map
            center={[field.latitude || 0, field.longitude || 0]}
            zoom={13}
            style={{
              width: "100%",
              height: 500,
              margin: "8px 0",
              borderRadius: 8,
              boxShadow:
                "0px 4px 6px -1px rgba(0,0,0,0.1) , 0px 2px 4px -1px rgba(0,0,0,0.06)",
            }}
            onClick={handleMapClick}
            scrollWheelZoom
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={selectedPosition} />
          </Map>{" "}
        </Update>
      </Content>
    </Container>
  );
};

export default Field;
