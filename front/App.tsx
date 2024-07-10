import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/Main';
import Footer from './src/screens/footer'; // Assuming correct import path for Footer
import MyPage from './src/screens/myPage';
//import Map from './src/Map'

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="MyPage" component={MyPage}/>
      </Stack.Navigator>
      <Footer /> 
    </NavigationContainer>
  );
};

export default App;
