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
import Upload from "./Screens/Upload";

const Stack = createNativeStackNavigator()

const headerOptions = {
  headerStyle: {
    backgroundColor: '#33083a',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator >
        
        <Stack.Screen name="Dashboard" component={Dashboard} options={headerOptions} />
          <Stack.Screen name="Get Started" component={GetStarted} options={headerOptions} />
          <Stack.Screen name="Login" component={Login} options={headerOptions} />
          <Stack.Screen name="Registration" component={Registration} options={headerOptions} />  
          <Stack.Screen name="Upload" component={Upload} options={headerOptions} />     
          <Stack.Screen name="Forgot Password" component={ForgotPassword} options={headerOptions} />
          <Stack.Screen name="Home" component={Home} options={headerOptions} />
          <Stack.Screen name="LoveUs" component={Dogs} options={headerOptions} />
          <Stack.Screen name="DoBook" component={Cats} options={headerOptions} />
          <Stack.Screen name="Chats" component={Chats} options={headerOptions} />
          <Stack.Screen name="Conversation" component={Conversation} options={headerOptions} />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              ...headerOptions,
              headerRight: () => null, // Hide the header right component
            }}
            initialParams={{ username: 'your_username_here' }} // Pass the username as a parameter
          />
          
          </Stack.Navigator>      
      </NavigationContainer>
    </Provider>
  );
}
