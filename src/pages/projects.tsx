import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <h1>Which knee ? </h1>
      <h1>Damian nieeee </h1>
    </Content>
  </Main>
);

export default About;
