import { ReactComponentProps } from '../ReactComponent';
import WcShell from './WcShell';
import { withReactWrapper } from './withReactWrapper';

const elName = COMPONENT_NAME;
!customElements.get(elName) && customElements.define(elName, WcShell);
export default withReactWrapper<WcShell, ReactComponentProps>(elName);
