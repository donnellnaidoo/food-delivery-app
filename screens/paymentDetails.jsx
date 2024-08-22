import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";

const PaymentDetails = ({ onSignupComplete, navigation }) => {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const validateCardNumber = (cardNumber) => {
    const cleanedCardNumber = cardNumber.replace(/\s+/g, "");
    const cardNumberRegex = /^\d{16}$/;
    return cardNumberRegex.test(cleanedCardNumber);
  };

  const validateExpirationDate = (expirationDate) => {
    const expirationDateRegex = /^(0[1-9]|1[0-2])\d{2}$/;
    return expirationDateRegex.test(expirationDate);
  };

  const validateCvv = (cvv) => {
    const cvvRegex = /^\d{3,4}$/;
    return cvvRegex.test(cvv);
  };

  const handleSubmit = () => {
    if (!cardNumber || !expirationDate || !cvv) {
      Alert.alert("Error", "Please enter all required details");
      return;
    }
    if (!validateCardNumber(cardNumber)) {
      Alert.alert("Error", "Please enter a valid card number");
      return;
    }
    if (!validateExpirationDate(expirationDate)) {
      Alert.alert("Error", "Please enter a valid expiration date (MM/YY)");
      return;
    }
    if (!validateCvv(cvv)) {
      Alert.alert("Error", "CVV must be 3 or 4 digits long");
      return;
    }

    setUserInfo((prevInfo) => ({
      ...prevInfo,
      cardNumber,
      expirationDate,
      cvv,
    }));
    navigation.navigate("HomeTabs");
    // onSignupComplete(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
        maxLength={19}
      />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="MM/YY"
          value={expirationDate}
          onChangeText={setExpirationDate}
          keyboardType="numeric"
          maxLength={5}
        />
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="CVV"
          value={cvv}
          onChangeText={setCvv}
          keyboardType="numeric"
          maxLength={4}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.nextButton}>
        <Text style={styles.buttonText}>Sign In</Text>
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallInput: {
    flex: 1,
    marginHorizontal: 8,
  },
  nextButton: {
    backgroundColor: "#ca8a04",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default PaymentDetails;
