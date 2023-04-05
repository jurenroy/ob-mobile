import { globalStyles } from '../../Components/styles';
import { View } from 'react-native';
import Logos from '../../Components/Logos';
import Cat from './Cat';

export default function Cats({navigation}) {

  return (
    
    <View style={globalStyles.container2}>
      <Logos navigation={navigation} />
      <Cat/>
    </View>
  );
}

