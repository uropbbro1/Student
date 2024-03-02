import React from 'react';
import {Alert, Button, Image, StyleSheet, Text, View} from 'react-native';

const width_proportion = '90%';

const onPressLearnMore = (id) => {
    Alert.alert('Скоро напишем подробнее про статью с id = ' + id.id)
}
const JournalCard = ({id, title, description, image_url}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.blue}>Новость</Text>
            <Image
                style={{width: 300, height: 200}}
                source={{
                    uri: {image_url}.image_url,
                }}
            />
            <Text style={[styles.news_title]}>{title}</Text>
            <Text>{description}</Text>
            <Button title={'Читать далее...'}
                    onPress={() => onPressLearnMore({id})}>
            </Button>
        </View>);
};
const styles = StyleSheet.create({
    news_image: {
        width: width_proportion,
    },
    container: {
        display: "flex",
        alignItems: 'flex-start',
        gap: 10,
        padding: 30,
        marginHorizontal: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 18,
        marginTop: 18,
    },
    news_title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default JournalCard