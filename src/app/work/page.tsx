'use client';

import {ReactElement} from 'react';
import Image from 'next/image';

import BaseLayout from '@/components/BaseLayout';
import Contentwrapper from '@/components/ContentWrapper';
import {projectsMobile, projectsTablet} from '@/data/projects';
import useMediaQuery from '@/utils/mediaQuery';

function Work(): ReactElement {
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
        <div>
          <h2 className="font-krub text-center text-base font-semibold mb-10 md:text-2xl">
            Commercials
          </h2>
          <div>
            {isMobile &&
              projectsMobile.map(project => (
                <div className="mb-12" key={project.projectName}>
                  <h2 className="font-krub text-center text-base font-semibold mb-4">
                    {project.projectName}
                  </h2>
                  <div className="grid gap-3 justify-center">
                    {project.images.map(image => (
                      <Image
                        quality={100}
                        key={image.alt}
                        alt={image.alt}
                        src={image.image}
                      />
                    ))}
                  </div>
                </div>
              ))}
            {isTablet &&
              projectsTablet.map(project => (
                <div className="mb-20" key={project.projectName}>
                  <h2 className="font-krub text-center text-2xl font-semibold mb-10">
                    {project.projectName}
                  </h2>
                  <div className="grid gap-6 justify-center">
                    {project.images.map(image => (
                      <Image
                        quality={100}
                        key={image.alt}
                        alt={image.alt}
                        src={image.image}
                      />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Contentwrapper>
    </BaseLayout>
  );
}

export default Work;
