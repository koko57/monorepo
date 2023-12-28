import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {add, CustomButton} from '@example-app/shared';


const App = () => {
  return (
      <View style={{flex: 1, padding: 40}}>
        <CustomButton
            onPress={() => {
              console.log(add(1, 2));
            }}
            buttonText={'CustomButton'}
        />
      </View>
  );
};

export default App;
