import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function renderApp() {
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById('root')
  );
}

const asyncLoadModules: Promise<any>[] = [];
if (import.meta.env.MODE === 'development') {
  asyncLoadModules.push(import('antd/dist/antd.less'));
}

if (asyncLoadModules.length) {
  Promise.all(asyncLoadModules).then(() => renderApp());
} else {
  renderApp();
}
