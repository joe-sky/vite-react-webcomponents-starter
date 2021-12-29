import { ReactElement } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import isEqual from 'lodash/isEqual';

export abstract class ReactWcElement extends HTMLElement {
  public connected = false;

  public rendering = false;

  protected rootNode: HTMLDivElement;

  protected createRoot = () => {
    this.rootNode = document.createElement('div');
    this.rootNode.id = 'root';
    this.shadowRoot?.appendChild(this.rootNode);
  };

  public data: Record<string, any>;

  public abstract render: () => ReactElement<any>;

  protected observer: MutationObserver;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    requestAnimationFrame(() => {
      this.createRoot();
    });

    this.observer = new MutationObserver(() => {
      if (this.connected && !this.rendering && this.attributes.length) {
        this.rendering = true;
        for (; this.attributes.length > 0; ) {
          this.attributes.removeNamedItem(this.attributes[0].name);
        }
        this.update();
      }
    });
    this.observer.observe(this, { attributes: true });
  }

  public setAttribute(name: string, value: any) {
    const currentValue = this.data[name];
    if (isEqual(currentValue, value)) {
      return;
    }
    this.data[name] = value;

    super.setAttribute(name, value);
  }

  public removeAttribute(name: string) {
    this.data[name] = null;
    super.removeAttribute(name);
  }

  public getAttribute(name: string) {
    return this.data[name];
  }

  public connectedCallback() {
    this.update();
    this.connected = true;
  }

  public disconnectedCallback() {
    unmountComponentAtNode(this.rootNode);
    this.connected = false;
    this.observer.disconnect();
  }

  public update() {
    requestAnimationFrame(() => {
      render(this.render(), this.rootNode);
      this.rendering = false;
    });
  }
}
