import React from 'react';
import { Text, View, Image,  Button,  } from 'react-native'

const HelloWorldApp = () => {
  return (
    <View style={{ flex: 1, justifycontent: "center", alignItems: "center", padding: 100, width: "100%"}}>
    <Image source={require('./assets/helloworld.jpg')} style={{ width: 130, height: 100, marginBottom: 0 }} />
      <Text style={{ marginBottom: 20, fontSize: 20, color:"green"}}>
        Hello World
      </Text>

    <Button title="No code? =)" color="orange" />
      <Image source={require('./assets/cat.png')} style={{ width: 130, height: 120, marginBottom: 0 }} />
    </View>
  );
}

export default HelloWorldApp;