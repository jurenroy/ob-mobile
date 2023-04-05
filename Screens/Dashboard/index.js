import { Text, View, Image} from 'react-native';
import { globalStyles } from '../../Components/styles';
import { useSelector } from "react-redux";

export default function Dashboard({navigation}) {
  let conditionTrue = 'Logged'
  const loginStatusRoute = useSelector((state) => state.data.loginStatus)  

  return (
    <View style={globalStyles.container}>      
      <Image source = {require('../../assets/PAPAPP.png')} style = {globalStyles.Started}/>
      <Text style={globalStyles.title} onPress={() => {
          if (conditionTrue!=loginStatusRoute){
          navigation.replace('Get Started')
          }if (conditionTrue==loginStatusRoute){
            navigation.replace('Home')
          }
        } }>ADOPT PETS</Text>           
           
    </View>
  );
}



