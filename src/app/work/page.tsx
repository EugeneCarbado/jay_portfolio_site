import {ReactElement} from 'react';

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
          <h2 className="font-krub text-center text-base font-semibold">
            Commercials
          </h2>
          <div>
            {projects.map(project => (
              <div key={project.projectName}>
                <h2 className="font-krub text-center text-base font-semibold">
                  {project.projectName}
                </h2>
                <div></div>
              </div>
            ))}
          </div>
        </div>
      </Contentwrapper>
    </BaseLayout>
  );
}

export default Work;
