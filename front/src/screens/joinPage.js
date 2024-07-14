import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import styles from '../styles/joinPageStyles';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const JoinPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedGender, setSelectedGender] = useState(null);
  const [checkDisable, setCheckDisable] = useState();

  const genderHandlePress = (gender) => {
    if (selectedGender !== gender) {
      setSelectedGender(gender);
    }
  };

  const disableHandlePress =()=>{
    if(checkDisable === true){
      checkDisable  === false;
    }

    else{checkDisable===true;}
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <ImageBackground source={require('../assets/sideBarIcon.png')} style={styles.sideBarIcon} />
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
        <TouchableOpacity
          style={[
            styles.manButton,
            selectedGender === '남성' ? styles.selectedGender : null,
          ]}
          onPress={() => genderHandlePress('남성')}
        >
          <Text style={styles.manText}>남성</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.womanButton,
            selectedGender === '여성' ? styles.selectedGender : null,
          ]}
          onPress={() => genderHandlePress('여성')}
        >
          <Text style={styles.womanText}>여성</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.checkDisableContainer}>
        <TouchableOpacity
          style={[
            styles.disableButton,
            checkDisable === true ? styles.checkDisable : null,
          ]}
          onPress={disableHandlePress()}
        >
          <Text style={styles.manText}>시각</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.disableButton,
            checkDisable === true ? styles.checkDisable : null,
          ]}
          onPress={disableHandlePress()}
        >
          <Text style={styles.manText}>청각</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.disableButton,
            checkDisable === true ? styles.checkDisable : null,
          ]}
          onPress={disableHandlePress()}
        >
          <Text style={styles.manText}>지체</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.disableETC}
          placeholder="기타"
          placeholderTextColor='black'
        />
      </View>

      <View style={styles.joinButton} onPress={() => navigation.navigate('MyPage')}>
        <TouchableOpacity>
          <Text style={styles.joinButtonText}>가입하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JoinPage;
