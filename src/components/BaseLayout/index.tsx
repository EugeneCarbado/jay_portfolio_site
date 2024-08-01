'use client';
import {ReactElement, ReactNode} from 'react';

import NavigationMobile from '../NavigationMobile';
import Contentwrapper from '../ContentWrapper';
import useMediaQuery from '@/utils/mediaQuery';
import NavigationTabletDesktop from '../NavigationTabletDesktop';

interface IBaseLayout {
  children: ReactNode;
  className?: string;
}

function BaseLayout({children, className}: IBaseLayout): ReactElement {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <main className={`${className}`}>
      <section>
        {isMobile ? <NavigationMobile /> : <NavigationTabletDesktop />}
      </section>
      <section>{children}</section>
      <footer className="bg-black text-white py-6">
        <Contentwrapper>
          <p className="text-center font-judson text-base">
            © Eugene Carbado 2024
          </p>
        </Contentwrapper>
      </footer>
    </main>
  );
}

export default BaseLayout;
