import { Image, Text, View, Pressable, ScrollView, ImageBackground} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Logos from '../../Components/Logos';
import { globalStyles } from '../../Components/styles';
import global from '../../Components/global';
import one from '../../assets/1.jpg'
import { Pets } from '../../Components/Pets';
import { Petss } from '../../Components/Petss';
import { Conv } from '../../Components/Conv';
import bg from '../../assets/bg.png'


export default function Chats({navigation}) {
    const storedImage = useSelector((state) => state.data.image)
    const storedNumber = useSelector((state) => state.data.number)
    const storedPet = Image.resolveAssetSource(one).uri 
    const dispatch = useDispatch()
    const number=global.idnum


   return (

    <ImageBackground source={bg} style={globalStyles.background}>
      
    <View style={globalStyles.container4}> 
      <View style={globalStyles.logoView}>
        <Logos navigation={navigation} />
      </View>  
        <Text style={globalStyles.title}>Chat</Text>
      
        <ScrollView>
        {Petss.map((Petss,Index) => {
            return (
            <Pressable style={globalStyles.chatsss} onPress={() => {navigation.replace('Conversation') 
              global.chat=Index
            } }> 
            <View style={globalStyles.chatView}>                
                {Petss.uri && <Image source={{ uri: Petss.uri }} style={{ width: 70, height: 70, justifyContent: 'center', borderRadius: 100, marginBottom: 12,}} />}
                <View  style={globalStyles.chatsd}>
                <Text key = {Index} style={globalStyles.labelsss}>{Petss.type}</Text>
                <Text style={globalStyles.labelsss}>{Conv[Index][Conv[Index].length-1]}</Text>
                </View>
            </View>
            </Pressable>
        );
      })}
      </ScrollView>
    </View>
    </ImageBackground>
  )}
