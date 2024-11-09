import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';
// import messaging from '@react-native-firebase/messaging';

const Stack = createNativeStackNavigator();

export default function Routes() {
    const userData = useSelector(state=>state.auth.userData)

    console.log("userData", userData)
  
    return (
        <NavigationContainer >
            <Stack.Navigator>

            {true?  MainStack(Stack):AuthStack(Stack)}     
   
            </Stack.Navigator>

        </NavigationContainer>
    );
}