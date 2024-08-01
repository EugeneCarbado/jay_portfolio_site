'use client';

import {ReactElement} from 'react';
import Image from 'next/image';

import BaseLayout from '@/components/BaseLayout';
import Contentwrapper from '@/components/ContentWrapper';
import socialMediaContacts from '@/data/socialMediaContacts';
import ContactImageMobile from '@/images/contactPage/contact-image-mobile.png';
import ContactImageTablet from '@/images/contactPage/contact-image-tablet.png';
import useMediaQuery from '@/utils/mediaQuery';

function Contact(): ReactElement {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  return (
    <BaseLayout>
      <Contentwrapper>
        <div className="text-center mb-20">
          <h1 className="font-krub text-base font-semibold md:text-2xl">
            Jay William Whittington Barrette
          </h1>
          <p className="font-judson text-textLightGrey md:text-xl">Filmmaker</p>
        </div>
        <div className="text-center">
          <h2 className="font-krub text-center text-base font-semibold mb-10 md:text-2xl md:mb-16">
            Contact:
          </h2>
          <p className="font-judson text-textLightGrey mb-10 underline md:text-xl md:mb-16">
            <a target="blank_" href="mailto:jwbcine@gmail.com">
              jwbcine@gmail.com
            </a>
          </p>
          <p className="font-judson text-textLightGrey mb-10 underline md:text-xl md:mb-16">
            <a target="blank_" href="tel:+44 (0) 7757 431439">
              +44 (0) 7757 431439
            </a>
          </p>
          <div className="grid grid-cols-5 justify-items-center w-fit gap-6 m-auto mb-10 md:mb-20 md:gap-10">
            {socialMediaContacts.map(contact => (
              <div key={contact.href}>
                <a target="blank_" href={contact.href}>
                  <Image
                    alt={contact.alt}
                    src={contact.icon}
                    className="md:w-[40px] md:h-[40px]"
                  />
                </a>
              </div>
            ))}
          </div>
          {isMobile && (
            <Image
              className="mb-20"
              alt="Jay William Whittington Barrette"
              src={ContactImageMobile}
            />
          )}
          {isTablet && (
            <Image
              alt="Jay William Whittington Barrette"
              src={ContactImageTablet}
              className="mx-auto mb-20"
            />
          )}
        </div>
      </Contentwrapper>
    </BaseLayout>
  );
}

export default Contact;
