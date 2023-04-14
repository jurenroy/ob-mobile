import { Text, View, Pressable, Image, ImageBackground} from 'react-native';
import { globalStyles } from '../../Components/styles';
import bg from '../../assets/bg.png'

export default function GetStarted({navigation}) {

  return (
    <ImageBackground source={bg} style={globalStyles.background}>
    <View style={globalStyles.container}>
        <Text style={globalStyles.title}>ONLINE BUGAW</Text>
      
        <Image source = {require('../../assets/ob.png')} style = {globalStyles.Started}/>

        <Pressable style={globalStyles.buttons} onPress={() => {
          
          navigation.replace('Login')}      
        }>
          <Text style={globalStyles.buttonsLabels}>Get Started</Text>
          </Pressable>      
            
          <Text style={globalStyles.label}>By Tapping "Get Started" you agreed to our</Text>
          <Text style={globalStyles.hyper}>Terms and Policies</Text>

      </View>
    </ImageBackground>
  );
}

