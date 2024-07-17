import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import styles from '../styles/myPageStyles'
import { TextInput } from 'react-native-gesture-handler';
import  * as KakaoLogin from '@react-native-seoul/kakao-login';
import { useNavigation } from '@react-navigation/native';

const MyPage = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await axios.post('http://10.0.2.2:8080/loginProcess', {
        username,
        password,
      });
      Alert.alert('로그인 성공');
    } catch (error) {
      Alert.alert('로그인 실패');
    }
  };

  const kakaoLogin = () => {
    KakaoLogin.login().then((result) => {
        console.log("Login Success", JSON.stringify(result));
        getProfile();
    }).catch((error) => {
        if (error.code === 'E_CANCELLED_OPERATION') {
            console.log("Login Cancel", error.message);
        } else {
            console.log(`Login Fail(code:${error.code})`, error.message);
        }
    });
  };

  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate('Main')}>
        <ImageBackground source={require('../assets/sideBarIcon.png')} style={styles.sideBarIcon}/>
      </TouchableOpacity>

      <View style={styles.idContainer}>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholderTextColor='black'
          placeholder="아이디"
        />
      </View>

      <View style={styles.pwdContainer}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="비밀번호"
          placeholderTextColor='black'
        />
      </View>

      <View style={styles.autoLoginContainer}>
        <TouchableOpacity
          style={[styles.checkbox, isChecked ? styles.checked : styles.unchecked]}
          onPress={handlePress}
        >
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>자동 로그인</Text>
      </View>

      <View style={styles.loginButton}>
        <TouchableOpacity onPress={()=>handleLogin()}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.authContainer}>
        <TouchableOpacity>
          <Text style={styles.searchId}>아이디</Text>
        </TouchableOpacity>
        <Text> / </Text> 
        <TouchableOpacity>
          <Text style={styles.searchPwd}>비밀번호 찾기</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('JoinPage')}>
          <Text style={styles.join}>회원가입</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.kakaoLoginButton} onPress={()=>kakaoLogin()}>
        <Text style={styles.kakaoLoginButtonText}>카카오 로그인</Text>
      </TouchableOpacity>

    </View>
  );
};

export default MyPage;