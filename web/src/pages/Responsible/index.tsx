import React from "react";
import { FaWhatsapp, FaPhone, FaPlus } from "react-icons/fa";

import {
  Container,
  Content,
  Contacts,
  ContactItem,
  ContactContainer,
  HeaderContact,
} from "./styles";

import { useField } from "../../hooks/field";

import Header from "../../components/Header";
import Aside from "../../components/Aside";

const Responsible: React.FC = () => {
  const { field } = useField();

  return (
    <Container>
      <Header />
      <Content>
        <Aside selected="responsible" />
        <Contacts>
          {field.responsibles.map((responsible) => (
            <ContactItem>
              <HeaderContact>
                <h1 key={responsible.name}>{responsible.name}</h1>
                <FaPlus size={30} />
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
  );
};

export default Responsible;
