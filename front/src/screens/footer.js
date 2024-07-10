// 다른 파일에서 스타일 임포트
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/footerStyles'; // 파일 경로에 따라 적절히 수정
import Icon from 'react-native-vector-icons/MaterialIcons';


const Footer = () => {
  return (
    <View>
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

export default Footer;
