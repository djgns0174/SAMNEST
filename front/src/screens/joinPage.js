import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import styles from '../styles/joinPageStyles'
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const JoinPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

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

      <View style={styles.pwdContainer}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="비밀번호 재확인"
          placeholderTextColor='black'
        />
      </View>

      <View style={styles.genderContainer}>
            <TouchableOpacity style={styles.manButton} >
                <Text style={styles.manText} >남성</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.womanButton} >
                <Text style={styles.womanText} >여성</Text>
            </TouchableOpacity>
        </View>

      <View style={styles.joinButton} onPress={()=>navigation.navigate('MyPage')}>
        <TouchableOpacity>
          <Text style={styles.joinButtonText}>가입하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JoinPage;