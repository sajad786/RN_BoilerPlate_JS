import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Onboarding = () => {
  return (
    <View style={styles.container} >
      <Text>Onboarding</Text>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'grey',
    justifyContent:'center',
    alignItems:'center'
  }
})