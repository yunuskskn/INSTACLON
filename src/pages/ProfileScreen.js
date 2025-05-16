import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

function ProfileScreen(){
    const name = useSelector(s => s.userName)
    const password = useSelector(s => s.password)
    return(
        <SafeAreaView>
            <Text>Profile</Text>
            <Text>UserName: {name}</Text>
            <Text>Password: {password}</Text>
        </SafeAreaView>
    )
}

export default ProfileScreen;