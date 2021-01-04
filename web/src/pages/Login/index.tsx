import React, { useState, useRef, useCallback } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Input from "../../components/Input";

import getValidationErrors from "../../utils/getValidationErrors";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";

import JogadorSVG from "../../assets/images/jogador-de-futebol2.svg";

import { Container, Content } from "./styles";

interface DataFormProps {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const sendData = useCallback(
    async (data) => {
      setLoading(true);

      try {
        signIn(data);
      } catch (err) {
        setLoading(false);
      }

      setLoading(false);
    },
    [signIn],
  );

  const handleSubmit = useCallback(
    async (data: DataFormProps): Promise<void> => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email("Este e-mail não é válido.")
            .required("O e-mail é obrigatório."),
          password: Yup.string()
            .min(6, "A senha deve ter no mínimo 6 carácteres.")
            .required("A senha é obrigatória."),
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
          title: "Erro ao logar",
          description: "Ocorreu um erro durante o login, tente novamente.",
        });
      }
    },
    [sendData, addToast],
  );

  return (
    <Container>
      <Header />
      <Content>
        <div>
          <h1>Faça seu login!</h1>
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

              <button type="submit">Entrar</button>
            </Form>
          )}
        </div>
        <img src={JogadorSVG} alt="Jogador de futebol" />
      </Content>
    </Container>
  );
};

export default Login;
