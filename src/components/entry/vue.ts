import WcShell from './vite-react-webcomponents.js';

const elName = 'vite-react-webcomponents';
!customElements.get(elName) && customElements.define(elName, WcShell);
