import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import Menu from "../screens/Menu";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import FormOne from "../screens/FormOne";

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          var iconName;
          if (route.name == "Menu") {
            iconName = focused ? "fast-food" : "fast-food-outline";
          } else if (route.name == "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name == "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} />;
        },
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarActiveBackgroundColor: "#ca8a04",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#0007",
        headerTitleAlign: "center",
      })}
    >
      <Tab.Screen options={{headerShown: false}} name="Menu" component={Menu} />
      <Tab.Screen options={{headerShown: false}} name="Cart" component={Cart} />
      <Tab.Screen options={{headerShown: false}} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    backgroundColor: "#fefce8",
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    borderRadius: 40,
    borderTopWidth: 0,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  tabBarItemStyle: {
    paddingVertical: 10,
    margin: 10,
    borderRadius: 40,
  },
});

export default HomeTabs;
