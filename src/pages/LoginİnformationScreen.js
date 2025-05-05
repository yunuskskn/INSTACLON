import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, Alert } from "react-native";

import Button from "../components/Button"
import Input from "../components/Input"

function Loginİnformation({navigation}){

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState(""); 

    function handleSubmit(){
        if(!userName || !userPassword){
            Alert.alert("InstaClon", "E-posta veya şifre boş bırakılamaz!")
            return
        }
        
        navigation.replace("HomeScreen")
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>InstaClon</Text>
            <Input placeholder="Kullanıcı Adı" onChangeText={setUserName} IconName="account"/>
            <Input placeholder="Şifre" onChangeText={setUserPassword} IconName="key" isSecure/> 
            <Button text="Giriş Yap" onPress={handleSubmit} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "black"
    },
    text: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
})

export default Loginİnformation;