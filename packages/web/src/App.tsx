import React from 'react';
import {add, CustomButton} from '@example-app/shared';


const App = () => {
  return (
      <div>
        <CustomButton onPress={() => console.log(add(1,2))} buttonText={"CustomButton"}/>
      </div>
  );
};

export default App;
