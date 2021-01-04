/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useCallback, useRef } from "react";
import { FaWhatsapp, FaPhone, FaPlus } from "react-icons/fa";
import { FiX, FiTrash2 } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import {
  Container,
  Content,
  Contacts,
  ContactItem,
  ContactContainer,
  HeaderContact,
  AddContainer,
  AddContent,
} from "./styles";

import Input from "../../components/Input";

import getValidationErrors from "../../utils/getValidationErrors";

import { useField } from "../../hooks/field";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";

import Header from "../../components/Header";
import Aside from "../../components/Aside";
import api from "../../services/api";

interface AddContactData {
  idResponsible: string;
  name: string;
}

interface AddContactProps {
  active: boolean;
  setActiveFalse(): void;
  addContact: AddContactData;
}

interface ContactDataForm {
  idResponsible: string;
  type: string;
  value: string;
}

const AddContact: React.FC<AddContactProps> = ({
  active,
  setActiveFalse,
  addContact,
}) => {
  const { attField } = useField();
  const { token } = useAuth();
  const { addToast } = useToast();

  const xRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<FormHandles>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const sendData = useCallback(
    async (data: ContactDataForm) => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        await api.post(
          `/contact/${addContact.idResponsible}`,
          {
            type: selectRef.current?.value,
            value: data.value,
          },
          config,
        );

        addToast({
          type: "success",
          title: "Contato criado com sucesso",
        });

        attField();
      } catch (error) {
        addToast({
          type: "error",
          title: "Erro ao criar responsável",
          description:
            "Ocorreu um erro durante o envio de informações, tente novamente mais tarde.",
        });
      }
    },
    [attField, addContact.idResponsible, token, addToast],
  );

  const handleSubmit = useCallback(
    async (data: ContactDataForm) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          value: Yup.string().required("O número é obrigatório."),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        sendData(data);
        xRef.current?.click();
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        addToast({
          type: "error",
          title: "Erro ao criar responsável",
          description:
            "Ocorreu um erro durante a criação do contato, tente novamente.",
        });
      }
    },
    [sendData, addToast],
  );

  return (
    <AddContainer active={active}>
      <AddContent ref={formRef} onSubmit={handleSubmit}>
        <div onClick={setActiveFalse} ref={xRef}>
          <FiX size={36} />
        </div>
        <h1>Adicionar novo contato para {addContact.name}</h1>
        <select ref={selectRef}>
          <option value="Whatsapp">WhatsApp</option>
          <option value="Fixo">Telefone Fixo</option>
        </select>
        <Input placeholder="Número..." name="value" />
        <button type="submit">Adicionar contato</button>
      </AddContent>
    </AddContainer>
  );
};

const Responsible: React.FC = () => {
  const [active, setActive] = useState(false);
  const [
    responsibleToAddContact,
    setResponsibleToAddContact,
  ] = useState<AddContactData>({} as AddContactData);
  const [attScreen, setAttScreen] = useState(false);

  const { field, attField } = useField();
  const { token } = useAuth();
  const { addToast } = useToast();

  const handleDeleteResponsible = useCallback(
    async (idResponsible: string) => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        await api.delete(`/responsible/${idResponsible}`, config);

        attField();

        field.responsibles = field.responsibles.filter(
          (responsible) => responsible.idResponsible !== idResponsible,
        );

        addToast({
          type: "success",
          title: "Responsável excluído com sucesso",
        });
      } catch (error) {
        addToast({
          type: "error",
          title: "Erro ao excluir responsável",
          description:
            "Ocorreu um erro durante a exclusão das informações no servidor, tente novamente mais tarde.",
        });
      }
    },
    [token, field, attField, addToast],
  );

  const handleDeleteContact = useCallback(
    async (idContact: string) => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        await api.delete(`/contact/${idContact}`, config);

        attField();

        addToast({
          type: "success",
          title: "Contato excluído com sucesso",
        });

        setAttScreen(!attScreen);
      } catch (error) {
        addToast({
          type: "error",
          title: "Erro ao excluir contato",
          description:
            "Ocorreu um erro durante a exclusão das informações no servidor, tente novamente mais tarde.",
        });
      }
    },
    [token, attField, attScreen, addToast],
  );

  const handleCloseAddContact = useCallback((): void => {
    setActive(false);
  }, []);

  const handleOpenAddContact = useCallback(
    (idResponsible: string, name: string): void => {
      setActive(true);
      setResponsibleToAddContact({ idResponsible, name });
    },
    [],
  );

  return (
    <>
      <Container active={active}>
        <Header />
        <Content>
          <Aside selected="responsible" />
          <Contacts>
            {field.responsibles.map((responsible) => (
              <ContactItem>
                <HeaderContact>
                  <h1 key={responsible.name}>{responsible.name}</h1>
                  <FaPlus
                    size={30}
                    onClick={
                      () =>
                        handleOpenAddContact(
                          responsible.idResponsible,
                          responsible.name,
                        )
                      // eslint-disable-next-line react/jsx-curly-newline
                    }
                  />
                  <FiTrash2
                    size={30}
                    onClick={
                      () => handleDeleteResponsible(responsible.idResponsible)
                      // eslint-disable-next-line react/jsx-curly-newline
                    }
                  />
                </HeaderContact>
                {responsible.contacts.map((contact) => (
                  <ContactContainer>
                    {contact.type === "Whatsapp" ? (
                      <FaWhatsapp color="#4DC95B" size={30} />
                    ) : (
                      <FaPhone size={30} />
                    )}{" "}
                    - <strong>{contact.value}</strong>
                    <FiX
                      size={16}
                      color="#c53030"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDeleteContact(contact.idContact)}
                    />
                  </ContactContainer>
                ))}
              </ContactItem>
            ))}
          </Contacts>
        </Content>
      </Container>
      <AddContact
        addContact={responsibleToAddContact}
        setActiveFalse={handleCloseAddContact}
        active={active}
      />
    </>
  );
};

export default Responsible;
