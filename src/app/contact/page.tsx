import {ReactElement} from 'react';
import Image from 'next/image';

import BaseLayout from '@/components/BaseLayout';
import Contentwrapper from '@/components/ContentWrapper';
import socialMediaContacts from '@/data/socialMediaContacts';
import ContactImageMobile from '@/images/contactPage/contact-image-mobile.png';

function Contact(): ReactElement {
  return (
    <BaseLayout>
      <Contentwrapper>
        <div className="text-center mb-20">
          <h1 className="font-krub text-base font-semibold">
            Jay William Whittington Barrette
          </h1>
          <p className="font-judson text-textLightGrey">Filmmaker</p>
        </div>
        <div className="text-center">
          <h2 className="font-krub text-center text-base font-semibold mb-10">
            Contact:
          </h2>
          <p className="font-judson text-textLightGrey mb-10">
            <a target="blank_" href="mailto:jwbcine@gmail.com">
              jwbcine@gmail.com
            </a>
          </p>
          <p className="font-judson text-textLightGrey mb-10">
            <a target="blank_" href="tel:+44 (0) 7757 431439">
              +44 (0) 7757 431439
            </a>
          </p>
          <div className="grid grid-cols-5 justify-items-center w-fit gap-6 m-auto mb-10">
            {socialMediaContacts.map(contact => (
              <div key={contact.href} className="w-[24px] h-[24px]">
                <a href={contact.href}>
                  <Image alt={contact.alt} src={contact.icon} />
                </a>
              </div>
            ))}
          </div>
          <Image
            className="mb-20"
            alt="Jay William Whittington Barrette"
            src={ContactImageMobile}
          />
        </div>
      </Contentwrapper>
    </BaseLayout>
  );
}

export default Contact;
