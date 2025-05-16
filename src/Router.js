import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Login from "./pages/LoginScreen";
import Loginİnformation from "./pages/LoginİnformationScreen";
import Home from "./pages/HomeScreen"
import Profile from "./pages/ProfileScreen"
import Provider from "./context/Provider"


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

function App() {
    function ProfilePage(){
        return(
            <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: "black", borderTopColor: "black"}}}>
                <Tab.Screen name="ExploreScreen" component={Home}/>
                <Tab.Screen name="ProfileScreen" component={Profile}/>
            </Tab.Navigator>
        )
    }

    return(
        <Provider>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="LoginScreen" component={Login} />
                <Stack.Screen name="LoginİnformationScreen" component={Loginİnformation} />
                <Stack.Screen name="HomeScreen" component={ProfilePage} />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}

export default App;