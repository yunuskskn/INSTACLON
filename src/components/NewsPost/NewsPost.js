import React, {useState} from "react";
import { SafeAreaView, View, Text, Image, ScrollView, TouchableOpacity} from "react-native";
import styles from "./NewsPost.Style"

function Post({post}){

    const [isLike, setIsLiked] = useState(false)

    return(
        <SafeAreaView style={styles.container}>   
            <View style={styles.inner_container}>
                <Image style={styles.profile_picture} source={{uri: post.profilePicture}} />
                <Text style={styles.userName}>{post.userName}</Text> 
            </View>
      
           {post.postUrlArray.length > 1 ?  <ScrollView horizontal pagingEnabled >
                {post.postUrlArray.map((datanews,index) => (
                    <Image
                        key={index.toString()}
                        style={styles.scroll_image} 
                        source={{uri: datanews}}
                    />
                ))}
            </ScrollView> :  <Image
                        key={post.id}
                        style={styles.image} 
                        source={{uri: post.postUrlArray[0]}}
                    /> }
      
            <View style={styles.comment_container}>
            <Text style={styles.comment}><Text style={styles.userName} >{post.userName}</Text> {post.comment}</Text>
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