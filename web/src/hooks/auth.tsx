import React, { createContext, useCallback, useContext, useState } from "react";

import api from "../services/api";

interface SignInCredentials {
  email: string;
  password: string;
}

interface Owner {
  city: string;
  email: string;
  idOwner: string;
  uf: string;
  whatsapp: string;
}

interface AuthContextData {
  owner: Owner;
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  owner: Owner;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@gofoot:token");
    const owner = localStorage.getItem("@gofoot:owner");

    if (token && owner) {
      return {
        token,
        owner: JSON.parse(owner),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post<AuthState>("/session", {
        email,
        password,
      });

      const { owner, token } = response.data;

      localStorage.setItem("@gofoot:token", token);
      localStorage.setItem("@gofoot:owner", JSON.stringify(owner));

      setData({ token, owner });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@gofoot:token");
    localStorage.removeItem("@gofoot:owner");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        owner: data.owner,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { useAuth, AuthProvider };
