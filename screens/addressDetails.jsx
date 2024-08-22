import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, {useState, useContext} from 'react'
import UserInfoContext from '../context/UserInfoContext';

const AddressDetails = ({ navigation }) => {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const validatePostalCode = (postalCode) => {
    // Postal code should be numeric and 4 digits long
    const postalCodeRegex = /^[0-9]{4}$/;
    return postalCodeRegex.test(postalCode);
  };

  const handleNext = () => {
    if (!street || !city || !state || !postalCode) {
      Alert.alert("Error", "Please enter all address details");
      return;
    }
    if (!validatePostalCode(postalCode)) {
      Alert.alert("Error", "Postal code must be 4 digits long");
      return;
    }

    setUserInfo(prevInfo => ({
      ...prevInfo,
      street,
      city,
      state,
      postalCode,
    }));
    navigation.navigate("formThree");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Address Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Street Address"
        value={street}
        onChangeText={setStreet}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Province"
        value={state}
        onChangeText={setState}
      />
      <TextInput
        style={styles.input}
        placeholder="Postal Code"
        value={postalCode}
        onChangeText={setPostalCode}
        keyboardType="numeric"
        maxLength={4} 
      />
      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  nextButton: {
    backgroundColor: '#ca8a04',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


export default AddressDetails