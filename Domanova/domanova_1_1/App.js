import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
const LotsOfStyles = () => {
return (
<View style={styles.container}>
<Text style={styles.headText}>Журнал Bright</Text>
<View style={styles.card}>
<Text style={styles.link}>Новости</Text>
<Image
  source={{uri: 'https://brightmagazine.ru/wp-content/uploads/2024/03/joshua-earle-ICE__bo2Vws-unsplash.jpg'}}
  style={{width: '100%', height: 160, marginTop: 32, marginBottom: 12}}
/>
<Text style={styles.title}>Витать в облаках полезно для ментального здоровья</Text>
<Text> Мечтателей, которые иногда отвлекаются от реальности, чтобы погрузиться в свой мир, часто осуждают. Но в целом, если это не вредит вашей деятельности, то это очень даже полезно. </Text>
<Text> </Text>
<Button title="Читать далее" color="blue" />
</View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#ECF0F1'
},
headText: {
marginTop: 45,
textAlign: 'center',
fontSize: 24,
fontWeight: 'bold'
},
card: {
backgroundColor: 'white',
margin: 12,
padding: 32,
},
link: {
color: 'blue',
},
title: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 12
}
});
export default LotsOfStyles;
