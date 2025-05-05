import React from "react";
import {Text, TextInput, View, SafeAreaView} from "react-native"

import styles from "./Input.Style"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

function Input({onChangeText, placeholder, IconName, isSecure}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.input_container}>
                <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChangeText} placeholderTextColor="gray" secureTextEntry={isSecure}/>
                <Icon name={IconName} size={25}/>
            </View>
        </SafeAreaView>
    )
}

export default Input;