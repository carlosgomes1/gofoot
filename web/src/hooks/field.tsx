import React, { createContext, useContext, useState, useCallback } from "react";

import api from "../services/api";

interface Responsible {
  idResponsible: string;
  name: string;
  fkField: string;
}

interface Field {
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

interface FieldContextData {
  field: Field;
  setField(idField: string): void;
}

const FieldContext = createContext<FieldContextData>({} as FieldContextData);

const FieldProvider: React.FC = ({ children }) => {
  const [fieldData, setFieldData] = useState(() => {
    const field = localStorage.getItem("@gofoot:field");

    if (field) {
      return JSON.parse(field);
    }

    return {} as Field;
  });

  const setField = useCallback(async (idField: string): Promise<void> => {
    localStorage.removeItem("@gofoot:field");
    setFieldData({} as Field);

    try {
      const response = await api.get<Field>(`/field/${idField}`);

      localStorage.setItem("@gofoot:field", JSON.stringify(response.data));
      setFieldData(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <FieldContext.Provider value={{ setField, field: fieldData }}>
      {children}
    </FieldContext.Provider>
  );
};

function useField(): FieldContextData {
  const context = useContext(FieldContext);

  if (!context) {
    throw new Error("useField must be used within an FieldProvider");
  }

  return context;
}

export { FieldProvider, useField };
