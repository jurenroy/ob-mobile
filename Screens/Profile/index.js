import { Image, Text, View, Pressable, Button, ImageBackground} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { setLoginStatus, setImage} from '../../Slices/Data/DataSlice';
import Logos from '../../Components/Logos';
import { globalStyles } from '../../Components/styles';
import * as ImagePicker from 'expo-image-picker';
import bg from '../../assets/bg.png'


export default function Profile({navigation}) {
  const storedfirstName = useSelector((state) => state.data.firstName)
  const storedlastName = useSelector((state) => state.data.lastName)
  const storedEmail = useSelector((state) => state.data.email)
  const storedImage = useSelector((state) => state.data.image)
  const dispatch = useDispatch()

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      dispatch(setImage((result.assets[0].uri)))
    }
  };

  return (
    <ImageBackground source={bg} style={globalStyles.background}>
    <View style={globalStyles.container3}> 
      <View style={globalStyles.logoView}>
        <Logos navigation={navigation} />
      </View>   
      <Text style={[globalStyles.title2,{marginBottom:-50,textAlign: 'center'}]}>Profile</Text>
      {storedImage && <Image source={{ uri: storedImage }} style={{ width: 150, height: 150, justifyContent: 'center',marginTop: 5,marginLeft: 100}} />}
      <Pressable style={globalStyles.buttonss} onPress={pickImage } >
        <Text style={globalStyles.buttonsLabels}>Upload Image</Text>
      </Pressable>      
      
      
      <Text style={[globalStyles.labels1,{textDecorationLine: 'underline',}]}>{storedfirstName + " " + storedlastName}Juren Roy Abragan,21</Text>
        <Text style={globalStyles.labels}>Interested in: Female{"\n"}</Text>
        <View style={[globalStyles.labels11,{backgroundColor:'#461257'}]}>
        <Text style={[globalStyles.labelss,{height:90}]}>Bio: i love to eat ice cream{"\n"}</Text>
      <Text style={[globalStyles.labelss,{height:40, marginTop:0}]}>Address: Bulua, Carmen{"\n"}</Text>
      </View>
      
      <View style={{flexWrap:'wrap', justifyContent: 'space-evenly', alignItems:'center', flexDirection:'row',display:'flex'}}>
      <Pressable style={globalStyles.buttons} onPress={() => {
        dispatch(setLoginStatus(''))        
        navigation.replace('Dashboard')
      } }><Text style={globalStyles.buttonsLabels}>Edit Profile</Text>
      </Pressable>
      <Pressable style={globalStyles.buttons} onPress={() => {
        dispatch(setLoginStatus(''))        
        navigation.replace('Dashboard')
      } }><Text style={globalStyles.buttonsLabels}>Logout</Text>
      </Pressable>
      </View>

    </View>
    </ImageBackground>
  )}
