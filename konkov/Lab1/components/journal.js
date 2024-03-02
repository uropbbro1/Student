import {FlatList, View} from "react-native";
import JournalCard from "./journal_card";

const DATA = [
    {
        id: 1,
        title: 'Ходить пешком или бегать: что лучше для нашего здоровья?',
        description: 'Ходить или бегать? Вот в чем вопрос. Пришло время рассмотреть его с разных сторон.',
        image_url: 'https://brightmagazine.ru/wp-content/uploads/2024/02/greg-rosenke-OqP4uMDQ1e0-unsplash-1024x683.jpg'
    },
    {
        id: 2,
        title: 'Доска видения — отличный инструмент для достижения профессиональных целей',
        description: 'Представить, каким проект должен быть в конечном итоге, чтобы шаг за шагом следовать за этим маяком. Сегодня говорим об эффективном рабочем инструменте — доске видения.',
        image_url: 'https://brightmagazine.ru/wp-content/uploads/2024/02/parabol-the-agile-meeting-toolbox-BDfQnva_6mU-unsplash-1024x683.jpg'
    },
    {
        id: 3,
        title: 'Высокая чувствительность как талант',
        description: 'Способность тонко чувствительность иногда считается недостатком, но психологи смело заявляют, что на самом деле очень крутой талант.',
        image_url: 'https://brightmagazine.ru/wp-content/uploads/2024/02/adrien-king-XzBluXxBoyQ-unsplash-600x400.jpg'
    }
];
const Journal = () => {
    return (
        <View>
            <FlatList data={DATA}
                      renderItem={({item}) => (
                          <JournalCard
                              id={item.id}
                              title={item.title}
                              description={item.description}
                              image_url={item.image_url}
                          />
                      )}/>
        </View>
    );
}

export default Journal