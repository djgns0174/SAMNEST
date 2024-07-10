import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCE24C',
    },
    title1: {
      color:'black',
      paddingTop: 80,
      paddingLeft:50,
      fontSize: 50,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    title2: {
      color:'black',
      paddingLeft:50,
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

export default styles;
