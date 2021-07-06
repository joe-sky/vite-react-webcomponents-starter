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

## Motivation

## Preset tools and libraries

- [Vite](https://github.com/vitejs/vite)
- [Rollup](https://github.com/rollup/rollup)
- [React](https://reactjs.org/)
- [Emotion](https://github.com/emotion-js/emotion)
- [Mobx(optional)](https://mobx.js.org/)
- [Ant Design(optional)](https://ant.design/)

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

<!-- ```bash
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── assets
│       └── images           # Image used by default template
├── src
│   ├── layout               # Atomic layout components
│   ├── pages                # Next JS pages
│   ├── styles               # PostCSS style folder with Tailwind
│   ├── templates            # Default template
│   └── utils                # Utility folder
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
``` -->
