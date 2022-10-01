import React from 'react'
import {StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native'

const stories = [
    {
        id: '1',
        uri: "https://images.unsplash.com/photo-1565691410967-4e1c68077b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG9yYW5nZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: '2',
        uri: "https://images.unsplash.com/photo-1565691410967-4e1c68077b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG9yYW5nZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: '9',
        uri: "https://images.unsplash.com/photo-1565691410967-4e1c68077b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG9yYW5nZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: '3',
        uri: "https://images.unsplash.com/photo-1565691410967-4e1c68077b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG9yYW5nZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },

    {
        id: '4',
        uri: "https://images.unsplash.com/photo-1565691410967-4e1c68077b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG9yYW5nZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: '8',
        uri: "https://images.unsplash.com/photo-1565691410967-4e1c68077b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG9yYW5nZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: '5',
        uri: "https://images.unsplash.com/photo-1565691410967-4e1c68077b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG9yYW5nZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },

]

const StoryList = () => {
    return(
        <ScrollView horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        style={styles.container}>
            <TouchableOpacity style={styles.storyContainer} onPress={
            () => alert('View Clicked')}>
           
          {stories.map(({ id, uri}) => (
            <ProfileHead key={id} uri={uri} />
          ))}
          
           </TouchableOpacity>
        </ScrollView>
    )
};


const ProfileHead = ({uri}) => {
    return <View style={styles.storyProfile}>
    <Image 
    source={{
        uri,
    }}
    styles={styles.storyProfileImage}/>
    </View>
}

const styles = StyleSheet.create({
    storyContainer: {
        flexDirection: "row",
        flex:1,
        justifyContent: "flex-end",
    },
    storyProfile: {
        width: 80,
        height: 80,
        borderRadius: 100 / 2,
        borderWidth: 3,
        borderColor: "orange",
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    storyProfileImage:{
        width: "90%",
        height: "90%",
        borderRadius: 80 / 2,
    },
    container:{
        marginTop: 100,
    }
});

export default StoryList;