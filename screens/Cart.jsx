import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { useContext, useState, useEffect } from "react";
import CartContext from "../context/CartContext";
import { Ionicons } from "@expo/vector-icons";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  // const [cartUpdate, setCartUpdate] = useState(cartItems)

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotal(totalAmount);
  }, [cartItems]);

  const deleteItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleCheckout = () => {
    setModalVisible(!modalVisible);
    setCartItems([]);
  };

  return (
    <>
      <TouchableOpacity style={styles.ClearButton} onPress={clearCart}>
        <Text style={styles.clearButtonText}>Clear Cart</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.cartContainer}
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: item.image }}
            />
            <View style={styles.cartItemDetails}>
              <Text style={styles.itemName}>{item.item}</Text>
              <Text style={styles.itemPrice}>R {item.price}</Text>
              <TouchableOpacity
                onPress={deleteItem}
                style={styles.deleteButton}
              >
                <Text>
                  <Ionicons
                    style={{ fontWeight: "condensedBold" }}
                    size={20}
                    color={"white"}
                    name="trash-outline"
                  />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R {total.toFixed(2)}</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.Checkout}
        >
          <Text>Checkout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Checkout</Text>

              <View style={styles.summaryContainer}>
                <Text style={styles.summaryTotal}>
                  Total: R {total.toFixed(2)}
                </Text>
              </View>

              <TouchableOpacity
                style={[styles.button, styles.buttonConfirm]}
                onPress={handleCheckout}
              >
                <Text style={styles.textStyle}>Confirm Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  ClearButton: {
    backgroundColor: "#007aff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginVertical: 15,
  },
  clearButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  cartContainer: {
    padding: 10,
  },
  cartItem: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  cartItemDetails: {
    paddingLeft: 15,
    flex: 1,
  },
  itemName: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  itemPrice: {
    marginBottom: 10,
    fontSize: 14,
    color: "#757575",
  },
  deleteButton: {
    backgroundColor: "#ff3b30",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  totalContainer: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    marginTop: 20,
    marginBottom: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  Checkout: {
    backgroundColor: "#ca8a04",
    borderRadius: 10,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  summaryContainer: {
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  summaryItem: {
    fontSize: 14,
  },
  summaryTotal: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  paymentText: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  paymentOptions: {
    flexDirection: "row",
    marginBottom: 20,
  },
  paymentButton: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonConfirm: {
    backgroundColor: "#4CAF50",
  },
  buttonClose: {
    backgroundColor: "#f44336",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Cart;
