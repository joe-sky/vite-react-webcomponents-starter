/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import logo from '../assets/images/logo.svg';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function AppHeader() {
  const [count, setCount] = useState(0);

  return (
    <Header>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React!</p>
      <p>
        <Button size="large" onClick={() => setCount(count => count + 1)}>
          count is: {count}
          <PlusOutlined />
        </Button>
      </p>
      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </Header>
  );
}

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
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

export default AppHeader;
