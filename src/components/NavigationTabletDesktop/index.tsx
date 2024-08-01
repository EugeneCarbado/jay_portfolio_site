import Link from 'next/link';
import {ReactElement} from 'react';
import Contentwrapper from '../ContentWrapper';

function NavigationTabletDesktop(): ReactElement {
  return (
    <Contentwrapper>
      <nav>
        <ul className="w-1/2 mx-auto font-krub text-lg flex flex-row justify-between py-8 mb-6 lg:mb-16">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/showreel">Showreel</Link>
          </li>
          <li>
            <Link href="/work">Gallery</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Contentwrapper>
  );
}

export default NavigationTabletDesktop;
