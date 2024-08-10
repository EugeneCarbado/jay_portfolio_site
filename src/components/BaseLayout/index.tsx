'use client';
import {ReactElement, ReactNode} from 'react';

import NavigationMobile from '../NavigationMobile';
import Contentwrapper from '../ContentWrapper';
import NavigationTabletDesktop from '../NavigationTabletDesktop';

interface IBaseLayout {
  children: ReactNode;
  className?: string;
}

function BaseLayout({children, className}: IBaseLayout): ReactElement {
  return (
    <main className={`${className}`}>
      <section className="md:hidden">
        <NavigationMobile />
      </section>
      <section className="hidden md:block">
        <NavigationTabletDesktop />
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
