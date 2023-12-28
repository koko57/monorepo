import React from 'react';
import {add} from '@example-app/shared';


const App = () => {
  return (
      <div>
        <button onClick={() => console.log(add(1,2))}>Run add function</button>
      </div>
  );
};

export default App;
