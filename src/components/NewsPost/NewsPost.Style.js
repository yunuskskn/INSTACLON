import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    
    image: {
        height: Dimensions.get("window").height / 2,
        backgroundColor: "#ccc"
    },
    comment: {
        flex: 1,
        flexShrink: 1,
        color: "white",
        padding: 10,
    },
    profile_picture: {
        width: 50,
        height:50,
        borderRadius: 25,
    },
    userName: {
        color: "white",
        alignSelf: "center",
        paddingLeft: 10,
        fontWeight: "bold"
    },
    inner_container: {
        flex: 1,
        flexDirection: "row",
        padding: 10
    },
    container: {
        flex: 1
    },
    icon: {
        marginTop: 5,
        width: 30,
        height: 30,
        resizeMode: "contain"
        
    },
    comment_container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'space-between'
    },
})