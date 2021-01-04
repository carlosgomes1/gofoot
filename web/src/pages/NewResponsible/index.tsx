import React, { useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import { Container, Content, FormContent } from "./styles";

import Aside from "../../components/Aside";
import Header from "../../components/Header";
import Input from "../../components/Input";

import { useField } from "../../hooks/field";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";

import api from "../../services/api";

import getValidationErrors from "../../utils/getValidationErrors";

interface ResponsibleDataForm {
  name: string;
}

const NewResponsible: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { attField, field } = useField();
  const { token } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

  const sendData = useCallback(
    async (data: ResponsibleDataForm) => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        await api.post(`/responsible/${field.idField}`, data, config);

        attField();

        addToast({
          type: "success",
          title: "Responsável criado com sucesso",
          description:
            "O novo responsável foi criado, você será redirecionado em 3 segundos.",
        });

        setTimeout(() => {
          history.push("/responsible");
        }, 3000);
      } catch (error) {
        addToast({
          type: "error",
          title: "Erro ao criar responsável",
          description:
            "Ocorreu um erro durante o envio de informações, tente novamente mais tarde.",
        });
      }
    },
    [attField, token, field.idField, history, addToast],
  );

  const handleSubmit = useCallback(
    async (data: ResponsibleDataForm): Promise<void> => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("O nome do responsável é obrigatório."),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        sendData(data);
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        addToast({
          type: "error",
          title: "Erro ao criar responsável",
          description:
            "Ocorreu um erro durante a criação do responsável, tente novamente.",
        });
      }
    },
    [sendData, addToast],
  );

  return (
    <Container>
      <Header />
      <Content>
        <Aside selected="newResponsible" />
        <FormContent ref={formRef} onSubmit={handleSubmit}>
          <Input
            placeholder="Nome do responsável..."
            icon={FiUser}
            name="name"
          />
          <button type="submit">Criar responsável</button>
        </FormContent>
      </Content>
    </Container>
  );
};

export default NewResponsible;
