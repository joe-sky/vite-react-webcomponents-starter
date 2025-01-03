import 'react';

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

declare global {
  interface ImportMeta {
    env: {
      MODE: string;
    };
  }

  const COMPONENT_NAME: string;
}
