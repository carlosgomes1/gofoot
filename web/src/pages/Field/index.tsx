import React, { useEffect, useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

import { Container, Content } from "./styles";

import api from "../../services/api";

import Header from "../../components/Header";
import Aside from "../../components/Aside";

interface LocationProps {
  idField: string;
}

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

const Field: React.FC = () => {
  const [field, setField] = useState<ResponseDataField>(
    {} as ResponseDataField,
  );

  const { idField } = useLocation().state as LocationProps;

  const getField = useCallback(async () => {
    await api.get<ResponseDataField>(`/field/${idField}`).then((response) => {
      setField(response.data);
    });
  }, [idField]);

  useEffect(() => {
    getField();
  }, [idField, getField]);

  return (
    <Container>
      <Header />
      <Content>
        <Aside selected="field" />
        <h1>{field.name}</h1>
      </Content>
    </Container>
  );
};

export default Field;
