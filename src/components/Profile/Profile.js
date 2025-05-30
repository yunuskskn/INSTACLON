import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, Text, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ProfileView() {
    const name = useSelector(s => s.userName);
    const password = useSelector(s => s.password);
    const resim = useSelector(s => s.profilResmi);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
            <Text style={{ color: "white", fontSize: 22, padding: 10 }}>UserName: {name}</Text>

            <Image style={styles.image} source={{ uri: resim }} />

            <View style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <Text style={styles.label}>Password: {showPassword ? password : "••••••••"}</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Ionicons
                        name={showPassword ? "eye-off" : "eye"}
                        size={22}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginLeft: 20,
        marginBottom: 10
    },
    label: {
        color: "white",
        fontSize: 18,
        marginBottom: 10
    },
    button: {
        backgroundColor: "#444",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        width: 50
    },
    buttonText: {
        color: "white",
        fontSize: 16
    }
});
