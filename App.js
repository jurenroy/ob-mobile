import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from 'react-redux'
import store from './Components/Redux/store'
import Login from "./Screens/Login";
import Registration from "./Screens/Registration";
import ForgotPassword from "./Screens/Forgot Password";
import Profile from "./Screens/Profile";
import GetStarted from "./Screens/GetStarted";
import Dashboard from "./Screens/Dashboard";
import Home from "./Screens/Home";
import Dogs from "./Screens/Home1";
import Cats from "./Screens/Home2";
import Chats from "./Screens/Chats";
import Conversation from "./Screens/Conversation";

const Stack = createNativeStackNavigator()

export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Get Started" component={GetStarted}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Registration" component={Registration}/>        
          <Stack.Screen name="Forgot Password" component={ForgotPassword}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Home(Dogs)" component={Dogs}/>
          <Stack.Screen name="Home(Cats)" component={Cats}/>
          <Stack.Screen name="Chats" component={Chats}/>
          <Stack.Screen name="Conversation" component={Conversation}/>
          <Stack.Screen name="Profile" component={Profile}/>

          </Stack.Navigator>      
      </NavigationContainer>
    </Provider>
  );
}
