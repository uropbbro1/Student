import React, {useRef} from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    useWindowDimensions,
    Text,
    Pressable, Alert
} from "react-native";

const images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/VQ-BEI_%286919052100%29.jpg/1200px-VQ-BEI_%286919052100%29.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPS2Vn4U0qNQ0Hfb4i0BHCLggam4XogpLSqEzmT1ZlSQ&s'
]


const App = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const {width: windowWidth} = useWindowDimensions();

    const buy = () => {
        Alert.alert('Отлично, покупаем самолет!')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Get The Best Airplane</Text>
            <View style={styles.scrollContainer}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX
                                }
                            }
                        }
                    ])}
                    scrollEventThrottle={1}
                >
                    {images.map((image, imageIndex) => {
                        return (
                            <Animated.View
                                style={{
                                    width: windowWidth,
                                    height: 250,
                                }}
                                key={imageIndex}
                            >
                                <ImageBackground source={{uri: image}} style={styles.card}>
                                </ImageBackground>
                                <Text style={styles.description}>Поможем вам купить лучший самолет!</Text>
                            </Animated.View>
                        );
                    })}
                </ScrollView>
                <View style={styles.indicatorContainer}>
                    {images.map((image, imageIndex) => {
                        const width = scrollX.interpolate({
                            inputRange: [
                                windowWidth * (imageIndex - 1),
                                windowWidth * imageIndex,
                                windowWidth * (imageIndex + 1)
                            ],
                            outputRange: [8, 16, 8],
                            extrapolate: "clamp"
                        });
                        return (
                            <Animated.View
                                key={imageIndex}
                                style={[styles.normalDot, {width}]}
                            />
                        );
                    })}
                </View>

            </View>
            <Pressable style={styles.button} onPress={buy}>
                <Text style={styles.text}>Купить!</Text>
            </Pressable>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 50
    },
    description: {
        display: 'flex',
        alignItems: 'center',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    scrollContainer: {
        height: 300,
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    },
    textContainer: {
        backgroundColor: "rgba(47,47,47,0.7)",
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 5
    },
    infoText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "rgba(233,241,5,0.84)",
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: "rgb(51,51,51)",
    },
});
export default App;