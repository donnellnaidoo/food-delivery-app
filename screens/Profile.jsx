import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";

const Profile = () => {
  const { userInfo } = useContext(UserInfoContext);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Details</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{userInfo.email}</Text>
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.info}>{userInfo.phoneNumber}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Address Details</Text>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.info}>{userInfo.street}</Text>
        <Text style={styles.label}>City:</Text>
        <Text style={styles.info}>{userInfo.city}</Text>
        <Text style={styles.label}>State:</Text>
        <Text style={styles.info}>{userInfo.state}</Text>
        <Text style={styles.label}>Postal Code:</Text>
        <Text style={styles.info}>{userInfo.postalCode}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Banking Details</Text>
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.info}>{userInfo.cardNumber}</Text>
        <Text style={styles.label}>Additional Info:</Text>
        <Text style={styles.info}>{userInfo.cvv}</Text>
        <Text style={styles.label}>Date of Birth:</Text>
        <Text style={styles.info}>{userInfo.expirationDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  section: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  info: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
});

export default Profile;
