import ReactComponent, { ReactComponentProps } from '../ReactComponent';
import { ReactWcElement } from './ReactWcElement';
import { CacheProvider } from '@emotion/react';
import createCache, { EmotionCache } from '@emotion/cache';
import { ConfigProvider } from 'antd';
import { as } from '../../utils';
import { Store, StoreContext } from '../../stores';
import styles from '../../../style/styles.css';

const { defaultProps } = ReactComponent;

export default class WcShell extends ReactWcElement {
  public data = defaultProps as ReactComponentProps;
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
          <StoreContext.Provider value={new Store()}>
            <style>{styles}</style>
            <ReactComponent {...this.data} />
          </StoreContext.Provider>
        </ConfigProvider>
      </CacheProvider>
    );
  };
}
