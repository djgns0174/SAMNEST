// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../App';

// type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

// type Props = {
//   navigation: MainScreenNavigationProp;
// };

// const Main: React.FC<Props> = ({ navigation }) => {
//   return (
//     <View>
//       <Text>Main Screen</Text>
//       <Button
//         title="Go to Map"
//         onPress={() => navigation.navigate('Map')}
//       />
//     </View>
//   );
// };

// export default Main;

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

const Main: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text>Main Screen</Text>
      <Button
        title="Go to Map"
        onPress={() => navigation.navigate('Map')}
      />
    </View>
  );
};

export default Main;

