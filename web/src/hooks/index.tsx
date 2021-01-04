import React from "react";

import { AuthProvider } from "./auth";
import { FieldProvider } from "./field";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <FieldProvider>{children}</FieldProvider>
  </AuthProvider>
);

export default AppProvider;
