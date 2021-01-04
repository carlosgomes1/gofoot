import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { FiTrash2, FiSettings } from "react-icons/fi";

import api from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useField } from "../../hooks/field";

import Header from "../../components/Header";
import Options from "../../components/Options";

import { Container, Content, Fields, FieldItem } from "./styles";

interface Field {
  complement?: string;
  fkOwner: string;
  idField: string;
  latitude: string;
  longitude: string;
  name: string;
  number: string;
  logradouro: string;
}

interface ResponseFields {
  fields: Field[];
  total: number;
}

const Owner: React.FC = () => {
  const [fields, setFields] = useState<Field[]>([]);
  const [totalFields, setTotalFields] = useState(0);

  const { token } = useAuth();
  const { setField } = useField();
  const history = useHistory();

  const handleDeleteField = useCallback(
    async (idField: string) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await api.delete(`/field/${idField}`, config);

      setFields(fields.filter((field) => field.idField !== idField));
    },
    [token, fields],
  );

  const handleNavigateToField = useCallback(
    (idField: string) => {
      localStorage.setItem("@gofoot:idField", idField);

      setField(idField);
      history.push("/field");
    },
    [history, setField],
  );

  const getFields = useCallback(async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await api.get<ResponseFields>("/fieldOfOwner", config).then((response) => {
      setFields(response.data.fields);
      setTotalFields(response.data.total);
    });
  }, [token]);

  useEffect(() => {
    getFields();
  }, [getFields]);

  return (
    <Container>
      <Header />
      <Content>
        <Options selected="owner" />
        <h1>Você possui {totalFields} campos.</h1>

        <Fields>
          {fields.map((field) => (
            <FieldItem key={field.idField}>
              <div>
                <FiTrash2
                  onClick={() => handleDeleteField(field.idField)}
                  size={32}
                />
                <FiSettings
                  size={32}
                  onClick={() => handleNavigateToField(field.idField)}
                />
              </div>
              <h1>Nome</h1>
              <span>{field.name}</span>
              <h1>Logradouro</h1>
              <span>{field.logradouro}</span>
              <h1>Número</h1>
              <span>{field.number}</span>
              <h1>Complemento</h1>
              <span>
                {field.complement ? field.complement : "Sem complemento"}
              </span>
            </FieldItem>
          ))}
        </Fields>
      </Content>
    </Container>
  );
};

export default Owner;