import { ReactComponentProps } from './ReactComponent';
import WcShell from './entry/WcShell';
import { withReactWrapper } from './wc/withReactWrapper';

const elName = 'vite-react-webcomponents';
!customElements.get(elName) && customElements.define(elName, WcShell);
export default withReactWrapper<WcShell, ReactComponentProps>(elName);
