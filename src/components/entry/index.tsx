import { forwardRef, ForwardRefRenderFunction, FC } from 'react';
import WcShell from './vite-react-webcomponents.js';

export function withReactWrapper<ElementType extends HTMLElement, PropsType>(TagName: any) {
  const ReactComponent: ForwardRefRenderFunction<{}, PropsType> = (props, ref) => {
    const { children } = props;

    return (
      <TagName
        ref={(el: ElementType) => {
          if (el) {
            Object.keys(props).forEach(k => {
              const v = props[k];
              el.setAttribute(k, v);
            });

            if (typeof ref === 'function') {
              ref(el);
            } else if (typeof ref === 'object' && ref && 'current' in ref) {
              (ref as any).current = el;
            }
          }
        }}>
        {children}
      </TagName>
    );
  };

  ReactComponent.displayName = TagName;

  return (forwardRef ? forwardRef(ReactComponent) : ReactComponent) as FC<PropsType>;
}

customElements.define('vite-react-webcomponents', WcShell);
export default withReactWrapper('vite-react-webcomponents');
