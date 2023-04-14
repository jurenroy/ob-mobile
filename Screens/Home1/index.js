import { globalStyles } from '../../Components/styles';
import { View } from 'react-native';
import Logos from '../../Components/Logos';
import Dog from './Dog';
import bg from '../../assets/bg.png'
import { ImageBackground } from 'react-native';

export default function Dogs({navigation}) {

  return (
    <ImageBackground source={bg} style={globalStyles.background}>
    
    <View style={globalStyles.container2}>
      <Logos navigation={navigation} />
      <Dog/>
    </View>
    </ImageBackground>
  );
}

