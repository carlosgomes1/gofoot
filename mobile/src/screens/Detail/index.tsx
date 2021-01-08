import React, { useEffect, useState, useCallback } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Text, Linking, TouchableOpacity, Platform } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

import {
  Container,
  Label,
  Title,
  InfoContainer,
  Content,
  ResponsaveisContainer,
  ResponsaveisTitle,
  ResponsavelItem,
  ResponsavelName,
  ContactContainer,
  ContactValue,
} from "./styles";

import api from "../../services/api";

interface Params {
  idField: string;
}

interface ContactData {
  idContact: string;
  type: string;
  value: string;
  fkResponsible: string;
}

interface ResponsibleData {
  idResponsible: string;
  name: string;
  fkField: string;
  contacts: ContactData[];
}

interface ResponseFieldData {
  complement?: string;
  fkOwner: string;
  idField: string;
  latitude: number;
  longitude: number;
  logradouro: string;
  name: string;
  number: string;
  responsibles: ResponsibleData[];
}

const Detail: React.FC = () => {
  const [field, setField] = useState<ResponseFieldData>(
    {} as ResponseFieldData,
  );

  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as Params;

  const handleOpenWhatsapp = useCallback((whatsapp: string) => {
    Linking.openURL(`whatsapp://send?phone=55${whatsapp}`);
  }, []);

  const handleOpenCall = useCallback((phone: string) => {
    if (Platform.OS === "android") {
      Linking.openURL(`tel:${phone}`);
    } else {
      Linking.openURL(`telprompt:${phone}`);
    }
  }, []);

  const getField = useCallback(async (): Promise<void> => {
    await api
      .get<ResponseFieldData>(`/field/${routeParams.idField}`)
      .then((response) => {
        setField(response.data);
      });
  }, [routeParams.idField]);

  useEffect(() => {
    getField();
  });

  return (
    <Container>
      <Feather
        name="arrow-left"
        size={32}
        color="#037e3f"
        style={{ marginLeft: 16, marginTop: 16 }}
        onPress={() => navigation.goBack()}
      />
      <Content>
        <InfoContainer>
          <Label>Nome</Label>
          <Title>{field.name}</Title>
        </InfoContainer>
        <InfoContainer>
          <Label>Endereço</Label>
          <Title>
            {field.logradouro}, nº{field.number}
            {field.complement === "" ? "" : `, ${field.complement}`}
          </Title>
        </InfoContainer>
      </Content>
      <ResponsaveisContainer>
        <ResponsaveisTitle>Responsáveis pelo campo</ResponsaveisTitle>
        {field.responsibles ? (
          field.responsibles.map((responsible) => (
            <ResponsavelItem key={responsible.idResponsible}>
              <ResponsavelName>{responsible.name}</ResponsavelName>
              {responsible.contacts.map((contact) => (
                <ContactContainer key={contact.idContact}>
                  <TouchableOpacity
                    style={{ flexDirection: "row", alignItems: "center" }}
                    onPress={
                      contact.type === "Whatsapp"
                        ? () => handleOpenWhatsapp(contact.value)
                        : () => handleOpenCall(contact.value)
                    }
                  >
                    {contact.type === "Whatsapp" ? (
                      <FontAwesome
                        name="whatsapp"
                        size={32}
                        color="#4DC95B"
                        style={{ marginRight: 8 }}
                      />
                    ) : (
                      <FontAwesome
                        name="phone"
                        size={32}
                        color="#333"
                        style={{ marginRight: 8 }}
                      />
                    )}
                    <ContactValue>{contact.value}</ContactValue>
                  </TouchableOpacity>
                </ContactContainer>
              ))}
            </ResponsavelItem>
          ))
        ) : (
          <Text>Sem responsáveis no momento.</Text>
        )}
      </ResponsaveisContainer>
    </Container>
  );
};

export default Detail;
