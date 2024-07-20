import {ReactElement} from 'react';
import Image from 'next/image';

import BaseLayout from '@/components/BaseLayout';
import Contentwrapper from '@/components/ContentWrapper';
import projects from '@/data/projects';

function Work(): ReactElement {
  return (
    <BaseLayout>
      <Contentwrapper>
        <div className="text-center mb-20">
          <h1 className="font-krub text-base font-semibold">
            Jay William Whittington Barrette
          </h1>
          <p className="font-judson text-textLightGrey">Filmmaker</p>
        </div>
        <div>
          <h2 className="font-krub text-center text-base font-semibold mb-10">
            Commercials
          </h2>
          <div>
            {projects.map(project => (
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
          </div>
        </div>
      </Contentwrapper>
    </BaseLayout>
  );
}

export default Work;
