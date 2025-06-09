import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from '@react-native-vector-icons/ionicons'
import CheckBox from '@react-native-community/checkbox'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textWel}>Welcome</Text>
                <Text style={styles.titleHeader}>Please sign in to continue</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.form}>
                    <View style={styles.textInput}>
                        <Icon name='person-sharp' size={24} style={styles.icon} color="#888" />
                        <TextInput
                            style={styles.input}
                            placeholder='Enter Email'
                            placeholderTextColor="#888"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType='email-address'
                            autoCapitalize='none'
                        />
                    </View>

                    <View style={styles.textInput}>
                        <Icon name='lock-closed' size={24} style={styles.icon} color="#888" />
                        <TextInput
                            style={styles.input}
                            placeholder='Enter Password'
                            placeholderTextColor="#888"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                            style={styles.iconEye}
                            onPress={() => setShowPassword(prev => !prev)}
                        >
                            <Icon name={showPassword ? 'eye' : 'eye-off'} size={24} color="#888" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.authOptions}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={remember}
                            onValueChange={setRemember}
                            tintColors={{ true: '#ff5e62', false: '#888' }}
                        />
                        <Text style={styles.rememberandforgotText}>Remember me</Text>
                    </View>
                    <View style={styles.forgotpass}>
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert('Thông báo', 'Tính năng đang phát triển')
                            }}
                        >
                            <Text style={styles.rememberandforgotText}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.buttonLogin} onPress={() => { }}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.orStyle}>
                    <View style={styles.line}></View>
                    <Text style={styles.orText}>OR</Text>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.loginWith}>
                    <TouchableOpacity style={styles.loginIconOnly}>
                        <Icon name="logo-google" size={50} color="#db4a39" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginIconOnly}>
                        <Icon name="logo-facebook" size={50} color="#3b5998" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginIconOnly}>
                        <Icon name="logo-apple" size={50} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => Alert.alert("Thông báo", "Đi tới trang Đăng ký")}>
                    <Text style={styles.signupLink}> Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff5e62'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textWel: {
        fontFamily: 'serif',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'serif',
    },
    titleHeader: {
        fontFamily: 'serif',
        fontSize: 20,
        fontStyle: 'italic',
        color: '#fff',
        fontFamily: 'serif',
    },
    body: {
        flexGrow: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'flex-start',
    },

    form: {
        padding: 15,
        marginTop: 50
    },
    textInput: {
        position: 'relative',
        justifyContent: 'center',
        marginBottom: 20,
        fontFamily: 'serif',
    },
    input: {
        fontSize: 16,
        paddingLeft: 50,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        height: 60,
        color: '#333',
        borderWidth: 1,
        borderColor: '#ddd',
        fontFamily: 'serif',
    },
    icon: {
        position: 'absolute',
        left: 15,
        top: 18,
        zIndex: 1
    },
    iconEye: {
        position: 'absolute',
        right: 15,
        top: 18,
        zIndex: 1,
    },
    authOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 4,
        marginRight: 8,
        backgroundColor: '#fff',
    },
    checkboxChecked: {
        backgroundColor: '#ff5e62',
    },
    rememberandforgotText: {
        fontFamily: 'serif',
        fontSize: 16,
        fontWeight: '500',
    },
    buttonLogin: {
        alignItems: 'center',
        margin: 10,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#ff5e62',
        elevation: 5
    },
    loginText: {
        fontFamily: 'serif',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    orStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        marginVertical: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#999',
        marginHorizontal: 30,
    },
    orText: {
        fontSize: 16,
        color: '#666',
    },
    loginWith: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
    },

    loginIconOnly: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        backgroundColor: '#fff',
    },
    signupText: {
        fontSize: 16,
        color: '#666',
        fontFamily: 'serif',
    },
    signupLink: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ff5e62',
        fontFamily: 'serif',
    },
})
