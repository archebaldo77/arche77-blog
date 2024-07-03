declare module '*.module.scss';

declare module '*.jpg';
declare module '*.png';
declare module '*.gif';

declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}
