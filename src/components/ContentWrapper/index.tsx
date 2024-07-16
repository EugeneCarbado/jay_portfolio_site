import {ReactElement, ReactNode} from 'react';

interface IContentWrapper {
  children: ReactNode;
  className?: string;
}

function Contentwrapper({className, children}: IContentWrapper): ReactElement {
  return <main className={`${className} content-grid`}>{children}</main>;
}

export default Contentwrapper;
