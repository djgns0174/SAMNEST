import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

const Map: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
	
    <View >
      <Text style={{marginTop: 50}}>Map Screen</Text>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Main')}
      style={{marginTop: 50}}>
        <Text>Go to Main</Text>
      </TouchableOpacity>
        
      
    </View>
	
  );
};

const styles = StyleSheet.create({
});

export default Map;

