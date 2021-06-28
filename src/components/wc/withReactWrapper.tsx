import { forwardRef, ForwardRefRenderFunction, FC } from 'react';
import { ReactWcElement } from './ReactWcElement';

export function withReactWrapper<ElementType extends ReactWcElement, PropsType>(TagName: any) {
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
