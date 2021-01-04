import React from "react";

import { AuthProvider } from "./auth";
import { FieldProvider } from "./field";
import { ToastProvider } from "./toast";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <FieldProvider>{children}</FieldProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
