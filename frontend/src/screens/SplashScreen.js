import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Easing,
    Dimensions,
} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import LinearGradient from 'react-native-linear-gradient';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

function Particle({ delay, startX, startY }) {
    const anim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.delay(delay),
                Animated.timing(anim, {
                    toValue: 1,
                    duration: 2500,
                    useNativeDriver: true,
                    easing: Easing.out(Easing.quad),
                }),
                Animated.timing(anim, {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    const translateY = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -60],
    });
    const opacity = anim.interpolate({
        inputRange: [0, 0.8, 1],
        outputRange: [0, 1, 0],
    });
    const scale = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [0.3, 1],
    });

    return (
        <Animated.View
            style={[
                styles.particle,
                {
                    left: startX,
                    top: startY,
                    opacity,
                    transform: [{ translateY }, { scale }],
                },
            ]}
        />
    );
}

export default function SplashScreen({ navigation }) {
    const progress = useRef(new Animated.Value(0)).current;
    const [percent, setPercent] = useState(0);
    const bounceAnim = useRef(new Animated.Value(0)).current;
    const fadeText = useRef(new Animated.Value(0)).current;
    const fadeOut = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(progress, {
            toValue: 1,
            duration: 3500,
            useNativeDriver: false,
            easing: Easing.linear,
        }).start(() => {
            // Fade out before navigate
            Animated.timing(fadeOut, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            }).start(() => {
                navigation.replace('Home');
            });
        });

        const listenerId = progress.addListener(({ value }) => {
            setPercent(Math.floor(value * 100));
        });

        Animated.loop(
            Animated.sequence([
                Animated.timing(bounceAnim, {
                    toValue: -20,
                    duration: 800,
                    easing: Easing.inOut(Easing.quad),
                    useNativeDriver: true,
                }),
                Animated.timing(bounceAnim, {
                    toValue: 0,
                    duration: 800,
                    easing: Easing.inOut(Easing.quad),
                    useNativeDriver: true,
                }),
            ])
        ).start();

        Animated.timing(fadeText, {
            toValue: 1,
            duration: 1800,
            delay: 1200,
            useNativeDriver: true,
        }).start();

        return () => {
            progress.removeListener(listenerId);
        };
    }, []);

    const widthInterpolated = progress.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
    });

    return (
        <Animated.View style={[styles.container, { opacity: fadeOut }]}>
            <LinearGradient
                colors={['#ff9966', '#ff5e62']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                {/* Particles */}
                <Particle delay={0} startX={SCREEN_WIDTH / 2 - 15} startY={200} />
                <Particle delay={700} startX={SCREEN_WIDTH / 2 + 20} startY={210} />
                <Particle delay={1400} startX={SCREEN_WIDTH / 2 - 30} startY={215} />
                <Particle delay={2100} startX={SCREEN_WIDTH / 2 + 5} startY={220} />

                <Animated.View
                    style={[
                        styles.iconContainer,
                        { transform: [{ translateY: bounceAnim }] },
                    ]}
                >
                    <Icon name="cafe-outline" size={100} color="#fff" />
                    {/* Animated glowing border */}
                    <Animated.View
                        style={[
                            styles.glowBorder,
                            {
                                opacity: fadeText,
                                transform: [
                                    {
                                        scale: fadeText.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.95, 1.15],
                                        }),
                                    },
                                ],
                                shadowRadius: fadeText.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [10, 25],
                                }),
                            },
                        ]}
                    />
                    <View style={styles.iconGlow} />
                </Animated.View>

                <Animated.Text style={[styles.appName, { opacity: fadeText }]}>
                    Cafe App
                </Animated.Text>
                <Animated.Text style={[styles.tagline, { opacity: fadeText }]}>
                    Freshly brewed for you
                </Animated.Text>

                <View style={styles.progressContainer}>
                    <Animated.View
                        style={[styles.progressBar, { width: widthInterpolated }]}
                    >
                        <LinearGradient
                            colors={['#fff6e5', '#fff']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={StyleSheet.absoluteFill}
                        />
                    </Animated.View>
                </View>

                <Text style={styles.percentText}>{percent}%</Text>
            </LinearGradient>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#ff5e62',
    },
    iconContainer: {
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 15,
        position: 'relative',
    },
    iconGlow: {
        position: 'absolute',
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: 'rgba(255,255,255,0.3)',
        zIndex: -1,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 30,
        elevation: 15,
    },
    glowBorder: {
        position: 'absolute',
        width: 110,
        height: 110,
        borderRadius: 55,
        borderWidth: 3,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.9,
        shadowRadius: 15,
        elevation: 15,
        zIndex: -1,
    },
    appName: {
        fontSize: 36,
        fontWeight: '800',
        color: '#fff',
        letterSpacing: 3,
        fontFamily: 'HelveticaNeue-Medium',
        textShadowColor: 'rgba(0,0,0,0.25)',
        textShadowOffset: { width: 0, height: 3 },
        textShadowRadius: 8,
    },
    tagline: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.85)',
        fontStyle: 'italic',
        marginTop: 6,
        marginBottom: 40,
        letterSpacing: 1,
        fontFamily: 'HelveticaNeue-Light',
        textShadowColor: 'rgba(0,0,0,0.1)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 4,
    },
    progressContainer: {
        width: '85%',
        height: 14,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 7,
        overflow: 'hidden',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 7,
    },
    progressBar: {
        height: '100%',
        borderRadius: 7,
        overflow: 'hidden',
        backgroundColor: 'transparent',
    },
    percentText: {
        marginTop: 20,
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
        letterSpacing: 1.5,
        textShadowColor: 'rgba(0,0,0,0.15)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 5,
    },
    particle: {
        position: 'absolute',
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.9,
        shadowRadius: 6,
        elevation: 10,
    },
});
