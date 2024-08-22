import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import React, { useState, useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";

const UserDeatils = ({ navigation }) => {
  const { setUserInfo } = useContext(UserInfoContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleNext = () => {
    if (!email || !password || !phoneNumber) {
      Alert.alert("Error", "Please enter all your details");
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert("Error", "Phone number must be 10 digits long");
      return;
    }

    setUserInfo((prevInfo) => ({
      ...prevInfo,
      email,
      password,
      phoneNumber,
    }));
    navigation.navigate("formTwo");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="PhoneNumber"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#333",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  nextButton: {
    backgroundColor: "#ca8a04",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default UserDeatils;
