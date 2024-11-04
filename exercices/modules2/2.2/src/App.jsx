import React from 'react';
import ColorBox from './ColorBox';

const App = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',  // Centre verticalement dans la page
    }}>
      <ColorBox />
    </div>
  );
};

export default App;
