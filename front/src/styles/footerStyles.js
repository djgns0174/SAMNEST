import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#FC7E4C',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',  // Auto margin at the top to push it to the bottom
    paddingVertical: 10, // Add padding to create some space around icons
  },
  footerText: {
    backgroundColor: '#FC7E4C',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10, // Adjust as needed
  },
  footerLink: {
    color: '#000',
    textDecorationLine: 'underline',
    paddingHorizontal: 10, // Add horizontal padding for spacing between links
  },
});

export default styles;
