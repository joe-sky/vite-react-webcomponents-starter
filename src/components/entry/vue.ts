import WcShell from './vite-react-webcomponents.js';

const elName = COMPONENT_NAME;
!customElements.get(elName) && customElements.define(elName, WcShell);
