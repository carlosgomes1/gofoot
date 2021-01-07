import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Fields from "../screens/Fields";

const AppStack = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <AppStack.Navigator headerMode="none" initialRouteName="Home">
      <AppStack.Screen component={Home} name="Home" />
      <AppStack.Screen component={Fields} name="Fields" />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
