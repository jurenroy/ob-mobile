import { Text, View, Image, ImageBackground } from 'react-native';
import { globalStyles } from '../../Components/styles';
import { useSelector } from "react-redux";
import bg from '../../assets/bg.png'


export default function Dashboard({navigation}) {
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn === true);  

  return (    
    <ImageBackground source={bg} style={globalStyles.background}>
      <View style={globalStyles.container}>       
      
        <Image source = {require('../../assets/ob.png')} style = {globalStyles.Started}/>
        <Text style={globalStyles.title} onPress={() => {
            if (isLoggedIn){
              navigation.replace('Home')
            } else {
              navigation.replace('Get Started')
            }
          }}>
          ONLINE BUGAW
        </Text> 
      </View>     
    </ImageBackground>               
  );
}
