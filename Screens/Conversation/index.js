import { Image, Text, View, Pressable, ScrollView, TextInput} from 'react-native';
import { useState } from 'react';
import { useSelector } from "react-redux";
import Logos from '../../Components/Logos';
import { globalStyles } from '../../Components/styles';
import global from '../../Components/global';
import { Pets } from '../../Components/Pets';
import { Petss } from '../../Components/Petss';
import { Conv } from '../../Components/Conv';
import { Statetus } from '../../Components/Statetus';
import bg from '../../assets/bg.png'


export default function Conversation({navigation}) {
    const storedfirstName = useSelector((state) => state.data.firstName)
    const storedImage = useSelector((state) => state.data.image)
    const [data, setData] = useState({
        message: '',
      })

    var ind = global.chat    

   return (
    <ImageBackground source={bg} style={globalStyles.background}>
      
    <View style={globalStyles.container5}> 
      <View style={globalStyles.logoView}>
        <Logos navigation={navigation} />
      </View>  
        <Text style={globalStyles.titleChat}>Chat</Text>

        <ScrollView>  
                
                <View style={globalStyles.chatView}>                
                    {Petss[ind].uri && <Image source={{ uri: Petss[ind].uri }} style={{ width: 70, height: 70, justifyContent: 'center', borderRadius: 100, marginLeft:15,marginRight:15}} />}
                    <Text style={globalStyles.chatLabel}>{Conv[ind][0]}</Text>
                </View>
                <View style={{height:Statetus[ind], width:360}}>
                    <View style={globalStyles.chatView2 } >  
                        <Text style={globalStyles.chatLabel2}>{Conv[ind][1]}</Text>              
                        {storedImage && <Image source={{ uri: storedImage }} style={{ width: 70, height: 70, justifyContent: 'center', borderRadius: 100, marginBottom: 12, marginLeft:15,marginRight:15}} />}
                    </View>  
                </View>
                
                <View style={{height:2*Statetus[ind], width:360}}>
                    <View style={globalStyles.chatView}>                
                    {Petss[ind].uri && <Image source={{ uri: Petss[ind].uri }} style={{ width: 70, height: 70, justifyContent: 'center', borderRadius: 100, marginBottom: 120, marginLeft:15,marginRight:15}} />}
                    <View style={globalStyles.container5}>
                    <Text style={globalStyles.chatLabel3}>Hi {storedfirstName}! Thanks for contacting Pets Adoption Program,     we will respond to  your message as    soon as we can.</Text>
                    </View> 
                    </View>   
                </View> 
                <View style={{height:Statetus[ind], width:360}}>
                    <View style={globalStyles.chatView23 } >              
                        {storedImage && <Image source={{ uri: storedImage }} style={{ width: 25, height: 25, justifyContent: 'center', borderRadius: 100, marginBottom: 12, marginLeft:15,marginRight:15}} />}
                    </View>  
                </View>             
                     
            
      </ScrollView>
        <View style={globalStyles.sendMsg}>
        <TextInput
            style={globalStyles.chatInput} 
            placeholder='Write Message' 
            value={data.message}
            onChangeText={text => {setData({...data,message: text})}}/>
        <Pressable onPress={() => {
            Conv[ind].push((data.message)) 
            Conv[ind].push(("Hi "+storedfirstName))
            Statetus[ind]=75
            setData({
                message: '',
              })
            } }>
        <Image source = {require('../../assets/sendButton.png')} style = {globalStyles.sendism}/>
      </Pressable>
        </View>
    </View>
    </ImageBackground>
  )}
