import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';

export default function AssetExample({id, header, content, image_url}) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.paragraph}>
        {header}
      </Text>
      <Text>
      {content}
      </Text>
      <Image style={styles.logo} source={{uri:image_url}} />
      <Button   
        onPress={() => Alert.alert('Читать далее...')}
        title="Читать новости"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: '1px',
    borderColor:'white',
    borderRadius:10,
    padding:10, 
    rowGap:10
  },
  paragraph: {
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 300,
    width: 300,
  }
});
