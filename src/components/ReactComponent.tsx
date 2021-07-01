import { useState, ReactNode } from 'react';
import styled from '@emotion/styled';
import logo from '../assets/images/logo.svg';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores';

export interface ReactComponentProps {
  titleText?: ReactNode;
  content?: ReactNode;
  height?: number | string;
  userName?: string;
}

const ReactComponent: React.FC<ReactComponentProps> = props => {
  const [count, setCount] = useState(0);
  const { common } = useStore();

  function onClick() {
    setCount(count => count + 1);
  }

  return (
    <Header height={props.height}>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hi {props.userName || common.userInfo.name}, welcome to {props.titleText}
      </p>
      <p>
        <Button size="large" onClick={onClick}>
          count is: {count} <PlusOutlined />
        </Button>
      </p>
      <p>{props.content}</p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <Bottom>
        <slot />
      </Bottom>
    </Header>
  );
};

ReactComponent.defaultProps = {
  titleText: 'Vite + React!',
  content: (
    <>
      Edit <code>App.tsx</code> and save to test HMR updates.
    </>
  ),
  height: '100vh',
  userName: ''
};

const Header = styled.header<Pick<ReactComponentProps, 'height'>>`
  background-color: #282c34;
  min-height: ${props => (props.height != null ? props.height : '100vh')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .ant-btn-lg {
    font-size: calc(10px + 2vmin);
    height: auto;
  }
`;

const Bottom = styled.footer`
  margin-top: 20px;
  font-size: calc(4px + 2vmin);
`;

export default observer(ReactComponent);
