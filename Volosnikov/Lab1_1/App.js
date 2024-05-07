import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';



export default function App() {
  const data = [
    {
      'id':1,
      "header": "Весна — отличный повод начать вставать раньше",
      "content": "Вставать раньше и наслаждаться утром — мечта многих, но долгими годами откладываемая. Мы считаем, что весна — отличный повод начать! Рассказываем подробнее.",
      "image_url": "https://brightmagazine.ru/wp-content/uploads/2024/03/jenny-ueberberg-4TasyqJop_g-unsplash-1024x683.jpg"
    },
    {
      'id':2,
      "header": "Как превратить жизненные вызовы в мотивацию",
      "content": "С трудностями и вызовами сталкиваются все, но преодолеть их можно только, если есть внутренняя мотивация. Рассказываем, какие вопросы стоит себе задать, чтобы учиться на трудностях и двигаться дальше.",
      "image_url": "https://brightmagazine.ru/wp-content/uploads/2024/03/tim-marshall-cAtzHUz7Z8g-unsplash-1024x683.jpg"
    },
    {
      'id':3,
      "header": "Как хорошо получаться на фотографиях на документы",
      "content": "Обычно, фотографии на документах — наши самые нелюбимые. Но хорошо получаться на этих официальных фотографиях в наших силах. Делимся советами профессионалов.",
      "image_url": "https://brightmagazine.ru/wp-content/uploads/2024/03/mylene-tremoyet-Da0pdCekeUs-unsplash-600x400.jpg"
    }
  ]
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Журнал bright
      </Text>
      <ScrollView styles={styles.items_list} contentContainerStyle={{
      rowGap: 16
}}>
        {data.map(
          item => 
            <Card styles={styles.item}>
              <AssetExample 
              id={item.id}
              header={item.header}
              content={item.content}
              image_url={item.image_url}
              />
            </Card>
          )
        }    
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  items_list: {
  },
  item:{
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
