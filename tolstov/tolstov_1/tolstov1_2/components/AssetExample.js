import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          "Кадиш.com" Натан Ингландер{'\n'}
          Издательство "Книжки"
        </Text>
      </View>
      <View style={styles.containerDown}>
        <Text>
        Странная штука  армия. Находясь там, клянёшь её на все лады; а уволившись, чувствуешь себя одиноким
  Джемс Хедли Чейз Доминико.

  У каждого парашютиста есть своя девушка, но не у каждой девушки есть свой парашютист...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#d3d3d3",
    padding: 0,
  },
  text:
  {
    textAlign: "center",
    fontSize: 24,
    paddingBottom: 40,
  },
  containerDown:
  {
    textAlign: "center",
    paddingTop: 15,
    fontSize: 18,
    margin: 'auto',
    backgroundColor: "#a9a9a9",
    paddingBottom: 100
  }
});
