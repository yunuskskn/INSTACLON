import React, {useState} from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./NewsPost.Style"

function Post({post}){

    const [isLike, setIsLiked] = useState(false)

    return(
        <SafeAreaView style={styles.container}>   
            <View style={styles.inner_container}>
                <Image style={styles.profile_picture} source={{uri: post.profilResim}} />
                <Text style={styles.userName}>{post.username}</Text> 
            </View>

            <Image
                key={post.id}
                style={styles.image} 
                source={{uri: post.resim}}
            /> 
      
            <View style={styles.comment_container}>
            <Text style={styles.comment}><Text style={styles.userName} >{post.username}</Text> {post.body}</Text>
            <TouchableOpacity onPress={() => setIsLiked(!isLike)}>
            <Image
            style={styles.icon}
            source={
                isLike 
                ? require("../icon/heart-icon-full.png") 
                : require("../icon/heart-icon.png")
            }
            />
            </TouchableOpacity>
            </View>

         
      </SafeAreaView>
      
        )
    
}

export default Post;