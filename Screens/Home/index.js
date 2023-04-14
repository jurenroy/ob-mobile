import HomePage from './HomePage';
import Logos from '../../Components/Logos';
import { globalStyles } from '../../Components/styles';
import { View } from 'react-native';
import bg from '../../assets/bg.png'
import { ImageBackground } from 'react-native';

export default function Home({navigation}) {

  return (
    <ImageBackground source={bg} style={globalStyles.background}>
    <View style={globalStyles.container2}>
      <Logos navigation={navigation} />
      <HomePage/>
    </View>
    </ImageBackground>
  );
}

