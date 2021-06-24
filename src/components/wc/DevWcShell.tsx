import { ReactComponentProps } from '../ReactComponent';
import WcShell from './WcShell';
import { withReactWrapper } from './withReactWrapper';

const elName = 'vite-react-webcomponents';
!customElements.get(elName) && customElements.define(elName, WcShell);
export default withReactWrapper<WcShell, ReactComponentProps>(elName);
