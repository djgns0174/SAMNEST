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

