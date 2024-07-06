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

