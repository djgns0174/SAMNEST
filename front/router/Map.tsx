// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../App';

// type MapScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Map'>;

// type Props = {
//   navigation: MapScreenNavigationProp;
// };

// const Map: React.FC<Props> = ({ navigation }) => {
//   return (
//     <View>
//       <Text>Map Screen</Text>
//       <Button
//         title="Go Back to Main"
//         onPress={() => navigation.navigate('Main')}
//       />
//     </View>
//   );
// };

// export default Map;

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

const Map: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
	
    <View>
      <Text>Map Screen</Text>
      <Button
        title="Go Back to Main"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
	
  );
};

export default Map;

