import { Image, Text, View, Pressable, Button} from 'react-native';
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
      {storedImage && <Image source={{ uri: storedImage }} style={{ width: 200, height: 200, justifyContent: 'center', borderRadius: 100}} />}
      <Pressable style={globalStyles.buttons} onPress={pickImage } >
        <Text style={globalStyles.buttonsLabels}>Upload Image</Text>
      </Pressable>      
      <Text style={globalStyles.labels}>Profile</Text>
      <Text style={globalStyles.labels}>{storedfirstName + " " + storedlastName}{"\n"}</Text>
      <Text style={globalStyles.labels}>Email Address: {storedEmail}</Text>

      <Pressable style={globalStyles.buttons} onPress={() => {
        dispatch(setLoginStatus(''))        
        navigation.replace('Dashboard')
      } }><Text style={globalStyles.buttonsLabels}>Logout</Text></Pressable>
    </View>
    </ImageBackground>
  )}
