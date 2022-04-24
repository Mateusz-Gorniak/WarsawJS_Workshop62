import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Info = ({ text }: { text: string }) => (
  <p className="text-2xl text-cyan-700">{text}</p>
);
const Info1 = ({ text }: { text: string }) => (
  <p className="text-green-500">{text}</p>
);

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <Info text={'Hello there! I am Mateusz "Mordechaj" Blumsztajn !!!'} />
      <Info1
        text={
          'I am little confused with js, but I looking forwad to new skills'
        }
      />
      <img
        src="https://www.wykop.pl/cdn/c3201142/comment_1584491285ODKWU9xO2hBNlZbd4XC79R.jpg"
        alt="Stahu"
        width="400"
        height="400"
      />
      <i>Jacek jest szefem. Do you have an issue !?</i>
    </Content>
  </Main>
);

export default About;
