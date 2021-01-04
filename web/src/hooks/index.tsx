import React from "react";

import { AuthProvider } from "./auth";
import { FieldProvider } from "./field";
import { ToastProvider } from "./toast";

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <AuthProvider>
      <FieldProvider>{children}</FieldProvider>
    </AuthProvider>
  </ToastProvider>
);

export default AppProvider;
