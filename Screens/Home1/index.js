import { globalStyles } from '../../Components/styles';
import { View } from 'react-native';
import Logos from '../../Components/Logos';
import Dog from './Dog';

export default function Dogs({navigation}) {

  return (
    
    <View style={globalStyles.container2}>
      <Logos navigation={navigation} />
      <Dog/>
    </View>
  );
}

