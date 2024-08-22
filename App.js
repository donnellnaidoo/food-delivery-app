import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabs from './navigators/HomeTabs';
import CartContextProvider from './context/CartContextProvider';
import UserInfoContextProvider from './context/UserInfoContextProvider';
import { useState } from 'react';  // Import useState
import FormOne from './screens/FormOne';


export default function App() {
  const [isSignedUp, setIsSignedUp] = useState(false); 

  // Function to handle signup completion
  const handleSignupComplete = () => {
    setIsSignedUp(true);
  };

  return (
    <NavigationContainer>
      <CartContextProvider>
        <UserInfoContextProvider>
          {isSignedUp ? (
            <HomeTabs /> 
          ) : (
            <FormOne onSignupComplete={handleSignupComplete} /> 
          )}
        </UserInfoContextProvider>
      </CartContextProvider>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
