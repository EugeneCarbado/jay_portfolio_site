'use client';

import {ReactElement, useEffect, useRef, useState} from 'react';
import Image from 'next/image';

import HambgerIcon from '@/images/icons/icon-hamburger.svg';
import CloseIcon from '@/images/icons/icon-close.svg';

import Contentwrapper from '../ContentWrapper';
import Link from 'next/link';

function NavigationMobile(): ReactElement {
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

  return (
    <div className="relative">
      <Contentwrapper className="py-6">
        <nav className="flex justify-end items-center">
          <div onClick={() => setIsOpen(!isOpen)}>
            <Image
              className="h-10 w-10"
              src={HambgerIcon}
              alt="Hamburger image"
            />
          </div>
        </nav>
      </Contentwrapper>
      <div
        ref={menuRef}
        className={`fixed w-[70vw] shadow-xl bg-white px-6 z-40 top-0 h-[100dvh] transition-all ease-in-out delay-300 ${
          !isOpen ? 'hidden' : 'right-0'
        }`}>
        <nav className="py-9 flex justify-end">
          <div className="pr-3" onClick={() => setIsOpen(!isOpen)}>
            <Image src={CloseIcon} alt="Hamburger image" />
          </div>
        </nav>
        <div className="text-base uppercase tracking-widest p-8">
          <Link className="z-60" href="/">
            <p className="mb-8">home</p>
          </Link>
          <Link className="z-60" href="/showreel">
            <p className="mb-8">showreel</p>
          </Link>
          <Link className="z-60" href="/work">
            <p className="mb-8">work</p>
          </Link>
          <Link className="z-60" href="/contact">
            <p>contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavigationMobile;
