import {
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import React from "react";

const Contact = ({id, name, phone, navigation}) => {
    return (
        <TouchableOpacity style={styles.contact_card}
                          onPress={() => {
                              navigation.navigate(
                                  'ProfileScreen',
                                  {
                                      id: {id},
                                      name: {name},
                                      phone: {phone},
                                      navigation: {navigation}
                                  })
                          }
                          }>
            <Text>{name}</Text>
        </TouchableOpacity>
    );
}


const Contacts = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Contact
                id={1}
                name={'Danil'}
                phone={'899999999999'}
                navigation={navigation}
            />
            <Contact
                id={2}
                name={'Denis'}
                phone={'88888888888'}
                navigation={navigation}
            />
            <Contact
                id={3}
                name={'Petr'}
                phone={'1284091820310'}
                navigation={navigation}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        flex: 1,
        marginHorizontal: 20,
        paddingVertical: 8,
        gap: 8,
    },
    text: {
        fontSize: 42,
    },
    contact_card: {
        padding: 16,
        margin: 8,
        borderWidth: 1,
        borderRadius: 8,
    }
});
export default Contacts