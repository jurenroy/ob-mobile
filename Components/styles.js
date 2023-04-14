import { StyleSheet } from 'react-native';
import bg from '../assets/bg.png'

export const globalStyles = StyleSheet.create({
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
      
      alignItems: 'center',
    },container4: {
      flex: 1,
      alignItems: 'center',
    },container5: {
      flex: 1,
      flexDirection: 'column',
  },
    input: {
      borderWidth: 2, 
      borderColor: 'black', 
      width: '75%', 
      padding: 5, 
      marginBottom: 15, 
      fontSize: 15, 
      borderRadius: 50,
      textAlign: 'center',
      justifyContent: 'center'
    },
    title: {
      fontWeight: 'bold', fontSize: 50, paddingBottom: 20, color: 'white'
    },title2: {
        fontWeight: 'bold', fontSize: 40, paddingBottom: 40, color: 'white'
    },labels: {
      fontSize: 20, color: 'white'
    },labelss: {
      fontSize: 25, color: 'white'
    },labelsss: {
      fontSize: 25, color: 'white'
    },chatLabel: {
      fontSize: 25,
      marginTop: 20,
      color: 'white'
    },chatLabel2: {
      fontSize: 25,
      marginTop: 20, 
      color: 'white'
    },chatLabel3: {
      fontSize: 25, 
      color: 'white'
    },hyper: {
      fontSize: 20, textDecorationLine: 'underline', marginTop: 15, color: 'white'
    },
    Started: {
        width: 250, height: 250,
        marginBottom: 20
    },logoism: {
        width: 100, height: 100
    },logoism2: {
        width: 72, height: 72
    },logoism3: {
      width: 60, height: 60,
      borderRadius: 50,
    },logoHearts: {
      width: 180, height: 180
    },sendism: {
      width: 50, height: 50
    },logoView: {
        flex:0,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems:'flex-start'
    },chatView: {
      flex:0,
      flexDirection:'row',
      justifyContent: 'flex-start',
      alignItems:'flex-start'
  },chatView2: {
    flex:0,
    flexDirection:'row',
    justifyContent: 'flex-end',
    alignItems:'stretch'
  },chatView23: {
    flex:0,
    flexDirection:'row',
    justifyContent: 'flex-end',
    alignItems:'stretch',
    marginTop: 80
  },heartView: {
      flex:0,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    buttons: {
        backgroundColor:'#000000',
        borderRadius: 50,
        height:50,
        width:200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15        
    },buttonsLabels: {
        fontWeight: 'bold',
        fontSize: 20,
        color:'#FFFFFF'
    },buttonsLabels2: {
        fontWeight: 'bold',
        fontSize: 14,
        color:'#FFFFFF'
    },chatsss: {
      backgroundColor:'#ffffff',
      borderRadius: 100,
      height:71,
      width:330,
      justifyContent: 'flex-start',
      alignItems:'flex-start',
      marginBottom: 20,
      marginLeft: 10    
    },chatssss: {
      backgroundColor:'#ffffff',
      borderRadius: 100,
      height:71,
      width:330,
      justifyContent: 'flex-end',
      alignItems:'flex-end',
      marginLeft: 10    
    },chatsd: {
      flex:0,
      flexDirection:'column',
      justifyContent: 'flex-start',
      alignItems:'flex-start',
      marginBottom: 40,
      marginLeft: 10    
    },chatInput: {
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
    }
  });