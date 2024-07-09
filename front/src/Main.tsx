// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { useNavigation, NavigationProp } from '@react-navigation/native';
// import { RootStackParamList } from '../App';

// const Main: React.FC = () => {
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();

//   return (
//     <View>
//       <Text>Main Screen</Text>
//       <Button
//         title="Go to Map"
//         onPress={() => navigation.navigate('Map')}
//       />
//     </View>
//   );
// };

// export default Main;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';

import selectIcon from './assets/selectIcon.png';
import recommendIcon from './assets/recommendIcon.png';
import userIcon from './assets/userIcon.png';
import sirenIcon from './assets/sirenIcon.png';

const Main: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>여행할 권리</Text>
      <View style={styles.content}>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('Map')}>
          <Image source={selectIcon} style={styles.image} />
          <Text style={styles.buttonText}>여행지 선택</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {backgroundColor: '#FCC14C'}]} onPress={() => navigation.navigate('Map')}>
          <Image source={recommendIcon} style={styles.image} />
          <Text style={styles.buttonText}>여행지 추천</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {backgroundColor: '#FCA74C'}]} onPress={() => navigation.navigate('Map')}>
          <Image source={userIcon} style={styles.image} />
          <Text style={styles.buttonText}>내 정보</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {backgroundColor: '#FC7E4C'}]} onPress={() => navigation.navigate('Map')}>
          <Image source={sirenIcon} style={styles.image} />
          <Text style={styles.buttonText}>긴급 호출</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Icon name="facebook" size={24} color="#000" />
          <Icon name="linkedin" size={24} color="#000" />
          <Icon name="youtube" size={24} color="#000" />
          <Icon name="instagram" size={24} color="#000" />
        </View>
        <View style={styles.footerText}>
          <Text style={styles.footerLink}>OurTeam</Text>
          <Text style={styles.footerLink}>About</Text>
          <Text style={styles.footerLink}>Contact Us</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE24C',
  },
  title: {
    padding: 50,
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    marginTop: 'auto',
    justifyContent: 'space-around',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingLeft: 50,
    paddingTop: 30,
    paddingBottom: 30,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
    
  },
  footer: {
    backgroundColor: '#FC7E4C',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    // marginBottom: 10,
  },
  footerText: {
    backgroundColor: '#FC7E4C',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerLink: {
    color: '#000',
    textDecorationLine: 'underline',
    paddingBottom: 30,
  },
  image: {
    width: 40,
    height: 40,
  },
});

export default Main;