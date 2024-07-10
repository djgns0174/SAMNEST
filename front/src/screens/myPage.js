import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';
import userIcon from '../assets/userIcon.png';
import styles from '../styles/myPageStyles'

const MyPage = () => {
  return (
    <View style={styles.container}>

        <TouchableOpacity style={[styles.button, {backgroundColor: '#FCA74C'}]} onPress={() => navigation.navigate('MyPage')}>
          <Image source={userIcon} style={styles.image} />
          <Text style={styles.buttonText}>내 정보</Text>
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
  );
};

export default MyPage;