import React from 'react';
import ViteReactWebcomponents, { ViteReactWebcomponentsProps } from '../ViteReactWebcomponents';
import { ReactWcElement } from '../wc/ReactWcElement';
import { CacheProvider } from '@emotion/react';
import createCache, { EmotionCache } from '@emotion/cache';
import { ConfigProvider } from 'antd';
import { as } from '../../utils';
import rootStore, { StoreContext } from '../../stores';

const { defaultProps } = ViteReactWebcomponents;

export default class WcShell extends ReactWcElement {
  public data = defaultProps;
  private emotionCache: EmotionCache;

  constructor() {
    super();

    this.emotionCache = createCache({
      key: 'vrwc',
      container: as(this.shadowRoot)
    });
  }

  public render = () => {
    return (
      <CacheProvider value={this.emotionCache}>
        <ConfigProvider getPopupContainer={triggerNode => as(this.shadowRoot)}>
          <StoreContext.Provider value={rootStore}>
            <link
              rel="stylesheet"
              type="text/css"
              href="//unpkg.com/@joe-sky/vite-react-webcomponents-style/vite-react-webcomponents.css"
            />
            <ViteReactWebcomponents {...this.data} />
          </StoreContext.Provider>
        </ConfigProvider>
      </CacheProvider>
    );
  };
}
