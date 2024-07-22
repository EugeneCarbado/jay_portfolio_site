import {ReactElement} from 'react';
import NextVideo from 'next-video';

import BaseLayout from '@/components/BaseLayout';
import Contentwrapper from '@/components/ContentWrapper';
import ShowreelVideo from '../../../videos/showreel.mp4';

function Showreel(): ReactElement {
  return (
    <BaseLayout>
      <Contentwrapper>
        <div className="text-center mb-32">
          <h1 className="font-krub text-base font-semibold">
            Jay William Whittington Barrette
          </h1>
          <p className="font-judson text-textLightGrey">Filmmaker</p>
        </div>
        <h2 className="font-krub text-center mb-8 text-base font-semibold">
          Showreel
        </h2>
        <NextVideo className="mb-96 w-full z-10" src={ShowreelVideo} />
      </Contentwrapper>
    </BaseLayout>
  );
}

export default Showreel;
