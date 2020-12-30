import React, { useCallback } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { FaWhatsapp, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { Container, Content } from "./styles";

import JogadorSVG from "../../assets/images/jogador-de-futebol.svg";

import Header from "../../components/Header";
import Input from "../../components/Input";

const Register: React.FC = () => {
  const handleSubmit = useCallback(
    async (data: string | unknown): Promise<void> => {
      try {
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
      } catch (err) {
        console.log(err);
      }
    },
    [],
  );

  return (
    <Container>
      <Header />
      <Content>
        <img src={JogadorSVG} alt="Jogador de futebol" />
        <div>
          <h1>Registre-se aqui!</h1>
          <Form onSubmit={handleSubmit}>
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
        </div>
      </Content>
    </Container>
  );
};

export default Register;
