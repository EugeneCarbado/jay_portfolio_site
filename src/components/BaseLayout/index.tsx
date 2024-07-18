'use client';
import {ReactElement, ReactNode} from 'react';

import NavigationMobile from '../NavigationMobile';
import Contentwrapper from '../ContentWrapper';

interface IBaseLayout {
  children: ReactNode;
  className?: string;
}

function BaseLayout({children, className}: IBaseLayout): ReactElement {
  return (
    <main className={`${className}`}>
      <section>
        <NavigationMobile />
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
