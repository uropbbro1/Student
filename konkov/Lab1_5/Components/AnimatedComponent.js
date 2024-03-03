import React, {useRef, useState} from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    useWindowDimensions, Easing
} from "react-native";


const images = [
    'https://avatars.mds.yandex.net/get-verba/937147/2a0000018c25cfe6abf398a1d2084f03b8d6/cattouchretcr',
    'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2021-12/1_3_1.jpg?itok=lGU80Iep',
    'https://avatars.mds.yandex.net/get-verba/216201/2a0000018c260ecf7789ceea9bb510472657/cattouch',
    'https://avatars.mds.yandex.net/get-vertis-journal/4212087/orig.webp_1701443689758/orig',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Tesla_Cybertruck_outside_unveil_modified_by_Smnt.jpg/1200px-Tesla_Cybertruck_outside_unveil_modified_by_Smnt.jpg'
]

const AnimatedComponent = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const {width: windowWidth} = useWindowDimensions();
    const [rotateAnim] = useState(new Animated.Value(0))  // Initial value for rotate: 0


    React.useEffect(() => {
        Animated.loop(
            Animated.timing(
                rotateAnim,
                {
                    toValue: 1,
                    duration: 5000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }
            )
        ).start();
    }, [])
    const rotateInterpolate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    const animatedStyle = {
        transform: [{
            rotate: rotateInterpolate
        }]
    }
    return (
        <SafeAreaView style={styles.container}>
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
                            <Animated.View                 // Special animatable View
                                style={{
                                    width: windowWidth,
                                    height: 250,
                                    ...animatedStyle
                                }}
                            >
                                <ImageBackground source={{uri: image}} style={styles.card}>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.infoText}>
                                            {"😎CyberTruck😎"}
                                        </Text>
                                    </View>
                                </ImageBackground>
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
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
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
        backgroundColor: "rgba(0,0,0, 0.7)",
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
    }
});


export default AnimatedComponent