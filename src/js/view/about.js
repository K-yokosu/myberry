import React from 'react';
import { Sentence } from '../component/sentence';

export const About = () => {
  const firstLine = {
    sentence: 'myberry（マイベリー）は苺が大好きな男が、',
  };
  const secondLine = {
    sentence: '苺農家さんや苺が大好きな人々にとって',
  };
  const thirdLine = {
    sentence: 'より良い生活を作りたいという願いから生まれました。',
  };
  const fourthLine = {
    sentence: 'myberryを使用することで農家さんから商品を購入することができます。',
  };
  const fifthLine = {
    sentence: '繋がることができます。',
  };
  const sixthLine = {
    sentence: '応援することができます。',
  };
  return (
    <>
      <section id="about">
        <div class="about">
          <img src="./images/about_image.jpg" />
          <div class="about__backColor"></div>
          <h1 class="about__title">About</h1>
          <div class="about__sentence">
            <p>
              <Sentence setParamater={firstLine} />
              <Sentence setParamater={secondLine} />
              <Sentence setParamater={thirdLine} />
              <Sentence setParamater={fourthLine} />
              <Sentence setParamater={fifthLine} />
              <Sentence setParamater={sixthLine} />
            </p>
            <p>苺の輪を広げましょう！！！</p>
          </div>
        </div>
      </section>
    </>
  );
};
