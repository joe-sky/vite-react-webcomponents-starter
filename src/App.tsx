import React from 'react';
import ViteReactWebcomponents from './components/ViteReactWebcomponents';
import './styles/app.less';

function App() {
  return (
    <div className="App">
      <ViteReactWebcomponents
        title="Hello Vite + React + Web Components!"
        content={
          <>
            Edit <code>tsx files</code> and save to test HMR updates.
          </>
        }
      />
    </div>
  );
}

export default App;
