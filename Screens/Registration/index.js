import { useState } from "react";
import { format } from "date-fns";
import {
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { globalStyles } from "../../Components/styles";
import { Petss } from "../../Components/Petss";
import { Statetus } from "../../Components/Statetus";
import { Conv } from "../../Components/Conv";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../../Components/useTogglePasswordVisibility";
import { useToggleConfirmPasswordVisibility } from "../../Components/useToggleConfirmPasswordVisibility";
import { Dropdown } from "react-native-element-dropdown";
import DatePicker from "react-native-modern-datepicker";
import bg from "../../assets/bg.png";
import { createUserProfile } from "../../api";

export default function Registration({ navigation }) {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const {
    confirmPasswordVisibility,
    rightIconConfirm,
    handleConfirmPasswordVisibility,
  } = useToggleConfirmPasswordVisibility();

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    birthday: "",
    email: "",
    password: "",
    username: "",
  });

  const [data2, setData2] = useState({
    confirmPassword: "",
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    const formattedDate = format(new Date(date), "yyyy-MM-dd");
    setSelectedDate(date);
    setShowDatePicker(false);
    setData({ ...data, birthday: formattedDate });
  };

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const handleGenderSelect = (value) => {
    setData({ ...data, gender: value });
  };

  const gender = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleSelect = (item) => {
    setValue(item.value);
    setIsFocus(false);
    setData({ ...data, gender: value });
  };

  return (
    <ImageBackground source={bg} style={globalStyles.background}>
      <View style={globalStyles.container}>
        <Image
          source={require("../../assets/ob.png")}
          style={globalStyles.logoism}
        />
        <Text style={globalStyles.lable}></Text>
        <Text style={globalStyles.title}>Registration</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="First Name"
          placeholderTextColor={"white"}
          value={data.first_name}
          onChangeText={(text) => {
            setData({ ...data, first_name: text });
          }}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Last Name"
          placeholderTextColor={"white"}
          value={data.last_name}
          onChangeText={(text) => {
            setData({ ...data, last_name: text });
          }}
        />

        <Dropdown
          style={[globalStyles.dropdown, isFocus && { borderColor: "#7EE0FF" }]}
          data={gender}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select Gender" : "..."}
          placeholderStyle={{ textAlign: "center", color: "white" }}
          value={data.gender}
          itemTextStyle={{
            textAlign: "center",
            marginTop: -15,
            marginBottom: -15,
            color: "white",
            backgroundColor: "#33083a",
          }}
          selectedTextStyle={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
          onChange={handleSelect}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          textStyle={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          valueTextStyle={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          renderValue={() => {
            if (value) {
              return <Text style={globalStyles.value}>{value}</Text>;
            }
            return null;
          }}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Birthday"
          placeholderTextColor={"white"}
          value={
            selectedDate ? format(new Date(selectedDate), "yyyy-MM-dd") : ""
          }
          onFocus={() => setShowDatePicker(true)}
        />
        {showDatePicker && (
          <DatePicker
            date={selectedDate || new Date()}
            mode="date"
            placeholder="Select date"
            minDate="01-01-1900"
            maxDate={new Date()}
            onDateChange={handleDateChange}
          />
        )}

        <TextInput
          style={globalStyles.input}
          placeholder="Email Address"
          placeholderTextColor={"white"}
          value={data.username}
          onChangeText={(text) => {
            setData({ ...data, username: text, email: text });
          }}
        />

        <View style={globalStyles.inputContainer}>
          <TextInput
            secureTextEntry={passwordVisibility}
            style={globalStyles.inputpass}
            placeholder="Password"
            placeholderTextColor={"white"}
            value={data.password}
            onChangeText={(text) => {
              setData({ ...data, password: text });
            }}
          />
          <Pressable
            onPress={handlePasswordVisibility}
            style={globalStyles.eyeIcon}
          >
            <MaterialCommunityIcons name={rightIcon} size={22} color="white" />
          </Pressable>
        </View>

        <View style={globalStyles.inputContainer}>
          <TextInput
            secureTextEntry={confirmPasswordVisibility}
            style={globalStyles.inputpass}
            placeholder="Confirm Password"
            placeholderTextColor={"white"}
            value={data2.confirmPassword}
            onChangeText={(text) => {
              setData2({ ...data2, confirmPassword: text });
            }}
          />
          <Pressable
            onPress={handleConfirmPasswordVisibility}
            style={globalStyles.eyeIcon}
          >
            <MaterialCommunityIcons
              name={rightIconConfirm}
              size={22}
              color="white"
            />
          </Pressable>
        </View>

        <Pressable
          style={globalStyles.buttons}
          onPress={() => {
            if (
              data.first_name != "" &&
              data.last_name != "" &&
              data.email != "" &&
              data.password != "" &&
              data2.confirmPassword != ""
            ) {
              if (
                data.email.match(
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                )
              ) {
                if (data.password == data2.confirmPassword) {
                  if (data.password.length > 8 && data.password.length > 8) {
                    global.state = 0;
                    global.dogState = 0;
                    global.catState = 0;
                    global.idnum =
                      global.dogidnum =
                      global.catidnum =
                      global.chat =
                      Petss.length =
                        0;
                    Statetus.length = 0;
                    Statetus.push(0);
                    Statetus.push(0);
                    Statetus.push(0);
                    
                    Conv.length = 0;
                    Conv.length = 10;
                    Conv[0] = [];
                    Conv[0].push("Interested?          ");
                    Conv[1] = [];
                    Conv[1].push("Interested?          ");
                    Conv[2] = [];
                    Conv[2].push("Interested?          ");
                    
                    createUserProfile(data, {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    })
                      .then((response) => {
                        console.log(response.data);
                        alert(
                          "Successfully Registered!\nPlease check your email\nfor activation"
                        );
                        navigation.replace('Upload', { username: data.username });
                      })
                      .catch((error) => {
                        console.log(error);
                        console.log(error.request);
                        console.log(data);
                      });
                  } else {
                    alert("Password too weak");
                  }
                } else {
                  alert("Password not match");
                }
              } else {
                alert("Invalid Email");
              }
            } else {
              if (
                data.first_name == "" &&
                data.last_name != "" &&
                data.email != "" &&
                data.password != "" &&
                data2.confirmPassword != ""
              ) {
                alert("Please Input Firstname");
              } else if (
                data.first_name != "" &&
                data.last_name == "" &&
                data.email != "" &&
                data.password != "" &&
                data2.confirmPassword != ""
              ) {
                alert("Please Input Lastname");
              } else if (
                data.first_name != "" &&
                data.last_name != "" &&
                data.email == "" &&
                data.password != "" &&
                data2.confirmPassword != ""
              ) {
                alert("Please Input Valid Email");
              } else if (
                data.first_name != "" &&
                data.last_name != "" &&
                data.email != "" &&
                data.password == "" &&
                data2.confirmPassword != ""
              ) {
                alert("Please Input Password");
              } else if (
                data.first_name != "" &&
                data.last_name != "" &&
                data.email != "" &&
                data.password != "" &&
                data2.confirmPassword == ""
              ) {
                alert("Please Confirm password");
              } else if (
                data.first_name == "" ||
                data.last_name == "" ||
                data.email == "" ||
                data.password == "" ||
                data2.confirmPassword == ""
              ) {
                alert("Please Input Credentials");
              }
            }
          }}
        >
          <Text style={globalStyles.buttonsLabels}>Register</Text>
        </Pressable>

        <Text
          style={globalStyles.hyper}
          onPress={() => {
            setData({
              email: "",
              password: "",
            });
            navigation.replace("Login");
          }}
        >
          Already have an account? Login
        </Text>
      </View>
    </ImageBackground>
  );
}
