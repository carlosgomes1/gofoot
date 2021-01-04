import React, { useState, useCallback, useRef } from "react";
import { FaWhatsapp, FaPhone, FaPlus } from "react-icons/fa";
import { FiX } from "react-icons/fi";
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

  const formRef = useRef<FormHandles>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const sendData = useCallback(
    async (data: ContactDataForm) => {
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

      attField();
    },
    [attField, addContact.idResponsible, token],
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
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [sendData],
  );

  return (
    <AddContainer active={active}>
      <AddContent ref={formRef} onSubmit={handleSubmit}>
        <FiX size={36} onClick={setActiveFalse} />
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

  const { field } = useField();

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
                </HeaderContact>
                {responsible.contacts.map((contact) => (
                  <ContactContainer>
                    {contact.type === "Whatsapp" ? (
                      <FaWhatsapp color="#4DC95B" size={30} />
                    ) : (
                      <FaPhone size={30} />
                    )}{" "}
                    - <strong>{contact.value}</strong>
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
