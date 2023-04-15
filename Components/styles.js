import { StyleSheet } from 'react-native';
import bg from '../assets/bg.png'

export const globalStyles = StyleSheet.create({
    cont: {
      flex: 1,
      background: 'black',
      height:100,
      width:'80%',
      marginLeft:'10%'
    },
    container: {
      flex: 1,
      background: bg.png,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    container2: {
        flex: 1,        
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },container3: {
      flex: 1,
    },container4: {
      flex: 1,
      alignItems: 'center',
    },container5: {
      flex: 1,
      flexDirection: 'column',
  },
    input: {
      borderWidth: 2, 
      borderColor: 'white', 
      width: '75%', 
      padding: 5, 
      marginBottom: 15, 
      fontSize: 15, 
      borderRadius: 10,
      textAlign: 'center',
      justifyContent: 'center',
      color:'white'
    },
    inputpass: {
      borderWidth: 2, 
      borderColor: 'white', 
      width: '100%', 
      padding: 5, 
      marginBottom: 15, 
      fontSize: 15, 
      borderRadius: 10,
      textAlign: 'center',
      justifyContent: 'center',
      color:'white'
    },
    inputContainer: {
      width: '75%'
    },
    title: {
      fontWeight: 'bold', fontSize: 40, paddingBottom: 20, color: 'white'
    },title2: {
        fontWeight: 'bold', fontSize: 40, paddingBottom: 40, color: 'white'
    },
    label: {
      fontSize: 15, 
      color: 'white', 
      marginTop:10,
      marginBottom:-20
    },
    labels1: {
      fontSize: 20,
      color: 'white', 
      marginBottom:50,
      marginLeft:80,
      width:250, 
      justifyContent: 'center',
      borderBottomColor: '#8a2be2', 
      fontWeight:'bold',
      borderRadius: 10,
      
    },
    labels11: {
      marginTop:-30, 
      margin:15, 
      borderRadius: 10,
      height: 170,
      marginBottom:20,
    },
    labels: {
      fontSize:20, 
      color: 'white', 
      fontWeight: 'bold',
      margin:5,
      width: 300,
      marginBottom:10,
      marginLeft:30,
      marginTop:-30,
      fontWeight: 'bold',
      justifyContent:'center',
      borderRadius: 10,
      height:65
    },
    labelss: {
      fontSize:20, 
      color: 'black', 
      marginBottom:15,
      marginLeft:15,
      marginTop: 15,
      width: 300,
      height:55,
      justifyContent:'center',
      backgroundColor: 'white',
      borderRadius: 10,
    },
    labelsss: {
      fontSize: 25,
       color: 'white'
    },
    chatLabel: {
      fontSize: 25,
      marginTop: 20,
      color: 'white'
    },
    chatLabel2: {
      fontSize: 25,
      marginTop: 20, 
      color: 'white'
    },
    chatLabel3: {
      fontSize: 25, 
      color: 'white'
    },
    hyper: {
      fontSize: 15, 
      textDecorationLine: 'underline',
       marginTop: 15, 
       color: 'white'
    },
    Started: {
        width: 250, 
        height: 250,
        marginBottom: 20
    },
    logoism: {
        width: 100, 
        height: 100
    },
    logoism2: {
        width: 72,
        height: 72
    },
    logoism3: {
      width: 50, 
      height: 50,
      borderRadius: 50,
      marginTop:10,
      marginLeft:5
    },
    logoHearts: {
      width: 100,
       height: 100
    },
    sendism: {
      width: 50, 
      height: 50
    },
    logoView: {
        flex:0,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems:'flex-start',
    },
    chatView: {
      flex:0,
      flexDirection:'row',
      justifyContent: 'flex-start',
      alignItems:'flex-start'
  },
  chatView2: {
    flex:0,
    flexDirection:'row',
    justifyContent: 'flex-end',
    alignItems:'stretch'
  },
  chatView23: {
    flex:0,
    flexDirection:'row',
    justifyContent: 'flex-end',
    alignItems:'stretch',
    marginTop: 80
  },
  heartView: {
    flexWrap:'wrap', 
    justifyContent: 'space-evenly', 
    alignItems:'center', 
    flexDirection:'row',
    display:'flex',
    width:'100%'
    },
    heartViewew: {
      flexWrap:'wrap', 
      justifyContent: 'space-evenly', 
      alignItems:'center', 
      flexDirection:'row',
      display:'flex',
      width:'100%',
      },
    buttons: {
        backgroundColor:'#7EE0FF',
        borderRadius: 50,
        height:35,
        width:130,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,      
    },
    buttonss: {
      backgroundColor:'#7EE0FF',
      borderRadius: 18,
      height: 35,
      width:130,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -10, 
      marginLeft: 112,
             
  },
  buttonsLabels: {
        fontWeight: 'bold',
        fontSize: 15,
        color:'#FFFFFF',
    },
    buttonsLabelss: {
          fontWeight: 'bold',
          fontSize: 15,
          color:'#FFFFFF',
      },
    buttonsLabels2: {
        fontWeight: 'bold',
        fontSize: 14,
        color:'#FFFFFF'
    },
    chatsss: {
      backgroundColor:'#ffffff',
      borderRadius: 100,
      height:71,
      width:330,
      justifyContent: 'flex-start',
      alignItems:'flex-start',
      marginBottom: 20,
      marginLeft: 10    
    },
    chatssss: {
      backgroundColor:'#ffffff',
      borderRadius: 100,
      height:71,
      width:330,
      justifyContent: 'flex-end',
      alignItems:'flex-end',
      marginLeft: 10    
    },
    chatsd: {
      flex:0,
      flexDirection:'column',
      justifyContent: 'flex-start',
      alignItems:'flex-start',
      marginBottom: 40,
      marginLeft: 10    
    },
    chatInput: {
      borderWidth: 2, 
      borderColor: 'black', 
      width: 270, 
      padding: 5, 
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10, 
      fontSize: 15, 
      borderRadius: 50,
      textAlign: 'center',
      justifyContent: 'center'
    },chatsdf: {
      flex:0,
      flexDirection:'row',
      justifyContent: 'flex-start',
      alignItems:'flex-start',
      marginBottom: 40,
      marginLeft: 10   
    },
    chatsdfg: {
      flex:0,
      flexDirection:'column',
      justifyContent: 'flex-start',
      alignItems:'flex-start',
      marginBottom: 40,
      marginLeft: 10   
    },
    sendMsg: {
      flex:0,
      flexDirection:'row',
      justifyContent: 'flex-start',
      alignItems:'flex-start',
      marginBottom: 10,
      marginLeft: 10   
    },
    titleChat: {
      fontWeight: 'bold', fontSize: 50, paddingBottom: 20, marginLeft: 130
    },
    background: {
      flex: 1,
      //resizeMode: "cover",
      //justifyContent: "center"
    },
    backgroundd: {
      flex: 1,
      height:500,
      marginTop:120
      //resizeMode: "cover",
      //justifyContent: "center"
    },
    eyeIcon: {
      position: 'absolute',
      top: 10,
      right: 15,
      color:'white'
    },dropdown: {
      height: '6%',
      width: '75%',
      borderColor: 'white',
      borderWidth: 2,
      borderRadius: 10,
      paddingHorizontal: 2,
      marginBottom: 15,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center',
      },
    value: {
      position: 'absolute',
      left: 5,
      right: 5,
      textAlign: 'center',
      alignItems:'center',
      opacity: 0,
    },
    
  });