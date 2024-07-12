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
    joinButton:{
      marginTop:12,
      width:220,
      height:45,
      justifyContent:"center",
      alignSelf:"center",
      backgroundColor:"black",
      borderRadius:15,
    },
    joinButtonText:{
      fontSize:20,
      color:'white',
      alignSelf:'center',
      fontWeight:'bold',
      marginBottom:5,
    },
    genderContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    manButton:{
        width:95,
        height:45,
        borderRadius:15,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        marginRight:30,
    },
    womanButton:{
        width:95,
        height:45,
        borderRadius:15,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    manText:{
        fontSize:15,
        color:'black',
        fontWeight:'bold',
    },
    womanText:{
        fontSize:15,
        color:'black',
        fontWeight:'bold',
    }
  });

export default styles;