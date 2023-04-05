import HomePage from './HomePage';
import Logos from '../../Components/Logos';
import { globalStyles } from '../../Components/styles';
import { View } from 'react-native';

export default function Home({navigation}) {

  return (
    
    <View style={globalStyles.container2}>
      <Logos navigation={navigation} />
      <HomePage/>
    </View>
  );
}

