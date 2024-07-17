import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Alert, Button } from 'react-native';
import styles from '../styles/joinPageStyles';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const JoinPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [selectedGender, setSelectedGender] = useState('남성');
  const [selectedDisable, setSelectedDisable] = useState([]);
  const [disableETCColor, setDisableETCColor]= useState('#FFDAB3');

  const idCheckDuplicateButtonPress = async () => {
    try {
      // 아이디 중복 확인 API 호출
      const response = await axios.post('http://10.0.2.2:8080/checkIdDuplicate', {
        username,
      });

      if (response.data) {
        Alert.alert('이미 존재하는 아이디입니다.');
      } else {
        Alert.alert('사용 가능한 아이디입니다.');
      }
    } catch (error) {
      console.error('아이디 중복 확인 실패:', error);
      Alert.alert('아이디 중복 확인에 실패했습니다.');
    }
  };

  const genderHandlePress = (gender) => {
    if (selectedGender !== gender) {
      setSelectedGender(gender);
    }
  };

  const disableHandlePress = (disable) => {
    if (selectedDisable.includes(disable)) {
      setSelectedDisable(selectedDisable.filter(selected => selected !== disable));
    } else {
      setSelectedDisable([...selectedDisable, disable]);
    }
  };

  const disableETCHandlePress = (text) =>{
    if(text.trim() !== ''){setDisableETCColor('#ffda6b')}
    else{setDisableETCColor('#FFDAB3')}
  }

  const handleJoin = async ()=>{
    //아이디 중복확인 필요
    if(password !== rePassword){
      Alert.alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      axios.post('http://10.0.2.2:8080/joinProcess', {
        username,
        password,
      })
      .then(response => {
        // 성공적으로 요청을 처리한 경우
        console.log('응답 데이터:', response.data);
        Alert.alert('회원가입을 완료했습니다.');
        navigation.navigate('MyPage');
      })
    } catch (error) {
      Alert.alert('회원가입에 실패했습니다.');
    }

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <ImageBackground source={require('../assets/sideBarIcon.png')} style={styles.sideBarIcon} />
      </TouchableOpacity>

      <View style={styles.idContainer}>
        <TextInput 
          style={styles.idInput}
          value={username}
          onChangeText={setUsername}
          placeholderTextColor='black'
          placeholder="아이디"
          textAlign="center"
        />

        <TouchableOpacity style={styles.idCheckButton} onPress={()=>idCheckDuplicateButtonPress}>
          <Text style={styles.idCheckButtonText}>중복 확인</Text>
        </TouchableOpacity>
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
          value={rePassword}
          onChangeText={setRePassword}
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

      {/* <View style={styles.genderContainer}> //성별 선택 다른버전
        <Picker
          selectedValue={selectedGender}
          style={{ height: 20, width: 220, backgroundColor:"#FFDAB3" }}
          onValueChange={(itemValue) => setSelectedGender(itemValue)}
        >
          <Picker.Item label="남성" value="남성" />
          <Picker.Item label="여성" value="여성" />
        </Picker>
      </View> */}

      <View style={styles.checkDisableContainer}>
        <TouchableOpacity
          style={[
            styles.disableButton1,
            selectedDisable.includes('시각') ? styles.checkDisable : null,
          ]}
          onPress={() => disableHandlePress('시각')}
        >
          <Text style={styles.disableText}>시각</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.disableButton1,
            selectedDisable.includes('청각') ? styles.checkDisable : null,
          ]}
          onPress={()=>disableHandlePress('청각')}
        >
          <Text style={styles.disableText}>청각</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.disableButton2,
            selectedDisable.includes('지체') === true ? styles.checkDisable : null,
          ]}
          onPress={()=>disableHandlePress('지체')}
        >
          <Text style={styles.disableText}>지체</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.disableETC, { backgroundColor: disableETCColor }]}>
        <TextInput
          style={styles.input}
          //value={inputDisableETC}
          onChangeText={disableETCHandlePress}
          placeholderTextColor='black'
          placeholder="기타"
        />
      </View>
      

      <View style={styles.joinButton}>
        <TouchableOpacity onPress={handleJoin}>
          <Text style={styles.joinButtonText}>가입하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JoinPage;