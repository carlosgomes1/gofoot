import React from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

/* eslint-disable camelcase */

import {
  useFonts,
  RobotoSlab_500Medium,
  RobotoSlab_400Regular,
  RobotoSlab_700Bold,
} from "@expo-google-fonts/roboto-slab";

import Home from "./src/screens/Home";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    RobotoSlab_500Medium,
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Home>
      <StatusBar style="auto" />
    </Home>
  );
};

export default App;
