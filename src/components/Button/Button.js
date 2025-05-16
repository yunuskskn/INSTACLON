import React from "react";
import { TouchableOpacity, Text, ActivityIndicator} from "react-native";
import styles from "./Button.Style";

const Button = ({text, onPress, loading}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {loading ?
            <ActivityIndicator/> :
            <Text style={styles.text}>{text}</Text>}
        </TouchableOpacity>
    )
}

export default Button;