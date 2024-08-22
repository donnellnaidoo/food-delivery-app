import React, { useState } from "react";
import {  StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import userDetails from "./userDetails";
import addressDetails from "./addressDetails";
import paymentDetails from "./paymentDetails";
import HomeTabs from "../navigators/HomeTabs";

const Stack = createStackNavigator();

const SignIn = ({ onSignInComplete, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="formOne" component={userDetails}/>
      <Stack.Screen options={{headerShown: false}} name="formTwo" component={addressDetails}/>
      <Stack.Screen options={{headerShown: false}} name="formThree" component={paymentDetails}/>
      <Stack.Screen options={{headerShown: false}} name="HomeTabs" component={HomeTabs}/>
    </Stack.Navigator>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});
