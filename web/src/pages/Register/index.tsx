import React, { useCallback, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import { FaWhatsapp, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import api from "../../services/api";
import getValidationErrors from "../../utils/getValidationErrors";

import { useToast } from "../../hooks/toast";

import { Container, Content } from "./styles";

import JogadorSVG from "../../assets/images/jogador-de-futebol.svg";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Loading from "../../components/Loading";

interface DataFormProps {
  email: string;
  password: string;
  whatsapp: string;
  uf: string;
  city: string;
}

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const history = useHistory();
  const { addToast } = useToast();

  const sendData = useCallback(
    async (data) => {
      setLoading(true);

      try {
        await api.post("/owner", data);

        addToast({
          type: "success",
          title: "Conta criada com sucesso",
          description:
            "Sua nova conta foi criada, você será redirecionado em 3 segundos.",
        });

        setTimeout(() => {
          history.push("/");
        }, 3000);
      } catch (err) {
        setLoading(false);
        addToast({
          type: "error",
          title: "Erro ao criar conta",
          description:
            "Ocorreu um erro durante o envio de informações, tente novamente mais tarde.",
        });
      }
    },
    [history, addToast],
  );

  const handleSubmit = useCallback(
    async (data: DataFormProps): Promise<void> => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email("Este e-mail não é válido.")
            .required("O e-mail é obrigatório."),
          password: Yup.string().min(
            6,
            "A senha deve ter no mínimo 6 carácteres.",
          ),
          whatsapp: Yup.string().required("O whatsapp é obrigatório."),
          uf: Yup.string().min(2).max(2).required("O estado é obrigatório."),
          city: Yup.string().required("A cidade é obrigatória."),
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
          title: "Erro ao criar nova conta.",
          description:
            "Ocorreu um erro durante a criação da sua conta, tente novamente.",
        });
      }
    },
    [sendData, addToast],
  );

  return (
    <Container>
      <Header />
      <Content>
        <img src={JogadorSVG} alt="Jogador de futebol" />
        <div>
          <h1>Registre-se aqui!</h1>
          {loading ? (
            <Loading />
          ) : (
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="E-mail"
                name="email"
                icon={FiMail}
              />
              <Input
                type="password"
                placeholder="Senha"
                name="password"
                icon={FiLock}
              />
              <Input placeholder="WhatsApp" name="whatsapp" icon={FaWhatsapp} />
              <Input placeholder="Estado" name="uf" icon={FaMapMarkerAlt} />
              <Input placeholder="Cidade" name="city" icon={FaBuilding} />

              <button type="submit">Cadastrar</button>
            </Form>
          )}
        </div>
      </Content>
    </Container>
  );
};

export default Register;
