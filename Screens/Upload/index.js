import { Image, Text, View, Pressable, Button, ImageBackground} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { setImage} from '../../Slices/Data/DataSlice';
import { globalStyles } from '../../Components/styles';
import * as ImagePicker from 'expo-image-picker';
import bg from '../../assets/bg.png'


export default function Upload({navigation}) {
  
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
      <Text style={[globalStyles.title2,{marginBottom:-50,textAlign: 'center'}]}>Profile Picture</Text>
      {storedImage && <Image source={{ uri: storedImage }} style={{ width: 250, height: 250, justifyContent: 'center',marginTop:15,marginLeft:50 ,borderRadius:200}} />}
      <Pressable style={globalStyles.buttonss} onPress={pickImage } >
        <Text style={globalStyles.buttonsLabels}>Upload Image</Text>
      </Pressable>      
      
        <Text style={[globalStyles.labels,{marginTop:20,marginLeft:35,fontSize:18}]}>Please Upload Photo for your Profile{"\n"}</Text>
      
      <View style={{flexWrap:'wrap', justifyContent: 'space-evenly', alignItems:'center', flexDirection:'row',display:'flex'}}>
      <Pressable style={globalStyles.buttons} onPress={() => {       
        navigation.replace('Login')
      } }><Text style={globalStyles.buttonsLabels}>Finish</Text>
      </Pressable>
      </View>

    </View>
    </ImageBackground>
  )}