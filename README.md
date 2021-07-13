# vite-react-webcomponents-starter

## Introduction

`vite-react-webcomponents-starter` is a boilerplate and starter for build web components using React and Vite.

## Features

- Using React to develop complex applications with web component shell
- Using Vite as the development build tool
- Using Rollup to build package
- Using TypeScript and preset generation TS type definition
- Linter and Code Formatter with ESLint, Stylelint and Prettier
- Preset the style isolation solution mounted in shadow dom
- Support setting non-string parameter(object or JSX tags) to attributes of web component in React
- Supports setting child tags using regular JSX syntax
- Good performance, multiple attribute changes will not appear repeated rendering
- Provide examples running in react and Vue

## Preset tools and libraries

- [Vite](https://github.com/vitejs/vite)
- [Rollup](https://github.com/rollup/rollup)
- [React](https://reactjs.org/)
- [Emotion](https://github.com/emotion-js/emotion)
- [Mobx(optional)](https://mobx.js.org/)
- [Ant Design(optional)](https://ant.design/)

## Motivation

This project can help you fully use React to develop cross framework web components. It using the isolation feature of shadow DOM to implement the coexistence of different versions of React, and using it in other frameworks such as Vue.

### Why use React to develop web components

Of course, the current using libraries like Lit can be very good to develop regular web components. But at the same time, you may also need to think about the following problems:

- React has a lot of high quality component libraries, but Lit has less ecology than React.

- Regular web components don't support passing non-string parameters, sometimes we have to use `JSON.stringify` manually.

- Even if you are familiar with React, you still have to learn Lit in order to develop web components.

However, in the official document of React, there is very little [content about web components](https://reactjs.org/docs/web-components.html#using-react-in-your-web-components), and only a very simple scenario is given. for example, the following points are not mentioned:

- When updating the properties of web components, how to update the internal React components.

- How to pass child nodes to internal React components.

- How to pass non string parameters to internal React components.

- How to render styles.

### Solution in this boilerplate

For the above problems, this boilerplate has given the solutions, and preset the configuration to support direct packaging as web components embedded with React components.

## Similar implementation

- [react-webcomponentify](https://github.com/a7ul/react-webcomponentify)

## Getting started

```bash
# Clone the project
git clone https://github.com/joe-sky/vite-react-webcomponents-starter.git

# Enter the project directory
cd vite-react-webcomponents-starter

# Install dependency
npm install  # or yarn

# Build css of Ant-Design
npm run style

# Then, you can run locally in development mode with live reload:
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```bash
.
├── build
│   ├── rollup.config.dts.js    # Rollup configuration for generate d.ts
│   ├── rollup.config.style.js  # Rollup configuration for extract css
│   └── rollup.config.js        # Rollup configuration for build package
├── package                     # Packaged production component code
├── examples
│   ├── react                   # Example which using packaged components in React(v16)
│   └── vue                     # Example which using packaged components in Vue(v3)
├── public
│   └── .nojekyll               # Solve the problem when deploying the vite project to github pages
├── src
│   ├── assets                  # Static resources such as images and SVG
│   ├── components
│       ├── wc                  # Web component shell code
│       └── ReactComponent.tsx  # React top level component
│   ├── styles                  # Global style code
│   ├── types                   # TS interface and type
│   └── utils                   # Utility folder
├── index.html                  # Development test page
├── vite.config.ts              # Vite configuration
└── tsconfig.json               # TypeScript configuration
```
