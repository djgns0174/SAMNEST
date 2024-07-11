import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCA74C',
    },
    sideBarIcon:{
      width:50,
      height:50,
      marginLeft:10,
      marginTop:10,
    },
    idContainer:{
      marginTop:100,
      width:220,
      height:45,
      alignSelf:"center",
      backgroundColor:"#FFDAB3",
      borderRadius:15,
    },
    pwdContainer:{
      marginTop:20,
      width:220,
      height:45,
      alignSelf:"center",
      backgroundColor:"#FFDAB3",
      borderRadius:15,
    },
    input:{
      alignSelf:"center",
      fontSize:18,
      color:'black',
      fontWeight:'bold'
    },
    autoLoginContainer:{
      marginTop:5,
      marginLeft:98,
      flexDirection:'row',
      alignItems:'center'
    },
    checkbox: {
      marginTop:10,
      width: 15,
      height: 15,
      borderRadius: 3,
      borderWidth: 2,
      backgroundColor: '#FFDAB3',
      borderColor:'#FFDAB3',
      marginRight: 10,
    },
    checkboxLabel: {
      marginTop:8,
      fontSize: 10,
      fontWeight:'bold',
      color:'black',
    },
    checked:{
      backgroundColor:'#FCA74C',
    },
    loginButton:{
      marginTop:12,
      width:220,
      height:45,
      justifyContent:"center",
      alignSelf:"center",
      backgroundColor:"black",
      borderRadius:15,
    },
    loginButtonText:{
      fontSize:20,
      color:'white',
      alignSelf:'center',
      fontWeight:'bold',
      marginBottom:5,
    },
    authContainer:{
      marginTop:10,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
    },
    searchId:{
      fontSize:10,
      color:'black',
      fontWeight:'bold',
    },
    searchPwd:{
      fontSize:10,
      color:'black',
      fontWeight:'bold',
    },
    join:{
      marginLeft:35,
      fontSize:10,
      color:'black',
      fontWeight:'bold',
    },
    kakaoLoginButton:{
      marginTop:30,
      width:220,
      height:45,
      justifyContent:"center",
      alignSelf:"center",
      backgroundColor:"#FEE500",
      borderRadius:15,
    },
    kakaoLoginButtonText:{
      fontSize:20,
      color:'black',
      alignSelf:'center',
      fontWeight:'bold',
      marginBottom:5,
    },
  });

export default styles;
