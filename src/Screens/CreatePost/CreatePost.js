import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CreatePost = () => {
  return (
    <View style={styles.container} >
      <Text>CreatePost</Text>
    </View>
  )
}

export default CreatePost

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'grey',
    justifyContent:'center',
    alignItems:'center'
  }
})