import { useState } from 'react';
import { Global } from '@emotion/react';
import { Input } from 'antd';
import ViteReactWebcomponents from './components/wc/DevWcShell';
import { globalStyles } from './styles/app';

function App() {
  const [titleText, setTitleText] = useState('Vite + React + Web Components!');
  const [content, setContent] = useState(
    <>
      Edit <code>tsx files</code> and save to test HMR updates.
    </>
  );

  return (
    <div className="App">
      <Global styles={globalStyles} />
      <ViteReactWebcomponents titleText={titleText} content={content}>
        <i>Try modifying the textbox at the bottom of screen</i>
      </ViteReactWebcomponents>
      <Input
        value={titleText}
        onChange={e => {
          setTitleText(e.target.value);
          setContent(
            <>
              Edit <code>tsx files</code> and save to test HMR updates. {e.target.value}
            </>
          );
        }}
      />
    </div>
  );
}

export default App;
