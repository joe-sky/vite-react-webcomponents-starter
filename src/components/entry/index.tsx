import React, { forwardRef } from 'react';
import WcShell from './vite-react-webcomponents.js';

export function withReactWrapper<ElementType extends HTMLElement, PropsType>(TagName: any) {
  const ReactComponent: React.ForwardRefRenderFunction<{}, PropsType> = (props, ref) => {
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

  return (forwardRef ? forwardRef(ReactComponent) : ReactComponent) as React.FC<PropsType>;
}

const elName = COMPONENT_NAME;
!customElements.get(elName) && customElements.define(elName, WcShell);
export default withReactWrapper(elName);
