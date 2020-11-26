import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.less';
import App from './App';

function renderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

const asyncLoadModules: Promise<any>[] = [];
if (import.meta.env.MODE === 'development' && !__USE_WC) {
  asyncLoadModules.push(import('antd/dist/antd.less'));
}

if (asyncLoadModules.length) {
  Promise.all(asyncLoadModules).then(() => renderApp());
} else {
  renderApp();
}
