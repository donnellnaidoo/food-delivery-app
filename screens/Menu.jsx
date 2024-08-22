import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import MenuItems from "../data/Menu.json";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";


const Menu = () => {
  const {setCartItems} = useContext(CartContext)
  const cartItems = []
  const [cart, setCart] = useState(cartItems);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    const newItem = {
      item: product.name,
      price: product.price,
      description: product.description,
      image: product.image
    }

    const updatedCart = [...cart, newItem]

    setCart(updatedCart)
    setCartItems(updatedCart)
  }

  const filteredMenuItems = MenuItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
 

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Order What You Desire!</Text>
        <TouchableOpacity style={styles.Icon}>
          <Ionicons size={25} name="alarm" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchAndFilter}>
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          style={styles.searchBar}
          placeholder="Search food, drinks or snacks"
        />
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons size={25} style={styles.filterIcon} name="filter" />
        </TouchableOpacity>
      </View>
      {/* <ImageBackground imageStyle={{borderRadius: 10}} source={{uri: "https://images.template.net/108153/food-banner-background-g4msl.png"}} style={styles.mainBanner}>
        <Text style={styles.bannerHeadline}>Grab our discounts now!</Text>
        <TouchableOpacity style={styles.bannerButton}>
          <Text style={styles.buttonText}>Order from us</Text>
        </TouchableOpacity>
      </ImageBackground> */}
      <FlatList
      style={styles.menuContainer}
        data={filteredMenuItems}
        renderItem={({ item }) => (
          <ScrollView style={styles.foodItem}>
            <View style={styles.imageContainer}>
              <Image style={styles.foodImage} source={{uri: item.image}} />
            </View>
            <View style={styles.nameAndRating}>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.rating}>
                <Ionicons size={20} color={"#ca8a04"} name="star" /> {item.rating}
              </Text>
            </View>
            <Text style={styles.foodDescription}>{item.description}</Text>
            <Text style={styles.foodPrice}>R {item.price}</Text>
            <TouchableOpacity onPress={() => addToCart(item)} style={styles.addToCart}>
              <Text><Ionicons color={"white"} size={30} name="cart"/></Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  Icon: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 25,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchAndFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    padding: 10,
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: '#ca8a04',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  filterIcon: {
    color: '#fff',
  },
  mainBanner: {
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  bannerHeadline: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  bannerButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  menuContainer: {
    marginTop: 10,
    marginBottom: 75,
  },
  foodItem: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  foodImage: {
    height: 200,
    width: '100%',
    borderRadius: 10,
  },
  nameAndRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  foodName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  rating: {
    fontSize: 16,
    color: '#ca8a04',
    alignItems: 'center',
  },
  foodDescription: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 10,
  },
  foodPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  addToCart: {
    backgroundColor: '#ca8a04',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    right: 0,
  },
});


export default Menu;
