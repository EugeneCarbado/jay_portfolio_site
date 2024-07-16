'use client';

import {ReactElement, useEffect, useRef, useState} from 'react';
import Image from 'next/image';

import HambgerIcon from '@/images/icons/icon-hamburger.svg';

import Contentwrapper from '../ContentWrapper';

function Navigation(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  let menuRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
  });

  console.log(isOpen);

  return (
    <>
      <Contentwrapper className="py-6">
        <nav>
          <div onClick={() => setIsOpen(!isOpen)}>
            <Image className="text-black" alt="" src={HambgerIcon} />
          </div>
        </nav>
      </Contentwrapper>
      {isOpen && <div></div>}
    </>
  );
}

export default Navigation;
