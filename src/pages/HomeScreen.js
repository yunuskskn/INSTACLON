import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList, View, ActivityIndicator } from "react-native";
import NewsPost from "../components/NewsPost"
import axios from "axios";
import {photos_url, post_url, users_url, comment_url} from "@env"

function HomePage(){
    const [loading, setLoading] =useState(true)
    const [fullData, setFullData] = useState([])

    useEffect(() => {
        getImages()
    }, [])

    const renderPost = ({item}) => <NewsPost post = {item} />

    const getImages = async () => {
        try {
            const response = await axios.get(photos_url)
            const postResponse = await axios.get(post_url)
            const userResponse = await axios.get(users_url)
            const commentResponse = await axios.get(comment_url)
            const slicedArray = response.data.slice(0, 20);
            const slicedPostArray = postResponse.data.slice(0, 20);
            const slicedUserArray = userResponse.data.slice(0, 20);
            const slicedCommentArray = commentResponse.data.slice(0, 20);
            const responseFullData = slicedArray.map((item, index) => ({...item, ...slicedPostArray[index], ...slicedUserArray[index], ...slicedCommentArray[index], resim: "https://assets.goal.com/images/v3/blt48cea88f1dea1192/210225%20Youssef%20En%20Nesyri%20of%20Fenerbahce%20celebrates%201920.jpg?auto=webp&format=pjpg&width=3840&quality=60"}))
            setFullData(responseFullData)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    if(loading){
        return <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}><ActivityIndicator/></View>
    }
    return(
        <SafeAreaView style={styles.container}>   
            <FlatList
            keyExtractor={item => item.id.toString()}
            data={fullData}
            renderItem={renderPost}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    text: {
        color:"white",
        margin: 10
    },
})

export default HomePage;