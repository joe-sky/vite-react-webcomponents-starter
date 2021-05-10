import React from 'react';
import WcShell from './vite-react-webcomponents.js';

export function withReactWrapper<ElementType extends HTMLElement, PropsType>(TagName: string) {
  const ReactComponent: React.ForwardRefRenderFunction<{}, PropsType> = (props, ref) => {
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
        }}
      />
    );
  };

  ReactComponent.displayName = TagName;

  return (React.forwardRef ? React.forwardRef(ReactComponent) : ReactComponent) as React.FC<PropsType>;
}

customElements.define('vite-react-webcomponents', WcShell);
export default withReactWrapper('vite-react-webcomponents');
