import React from 'react';
import { TopImageCreate } from '../component/topImageCreate';

export const TopImage = () => {
  const imageSet1 = {
    src: './images/main_image1.jpg',
    imgClass: 'topImages__item1',
    h2Class: 'topImages__title1',
    sentence: 'いちご狩り！！',
  };
  const imageSet2 = {
    src: './images/main_image2.jpg',
    imgClass: 'topImages__item2',
    h2Class: 'topImages__title2',
    sentence: '苺ミルク置いてます。',
  };
  const imageSet3 = {
    src: './images/main_image3.jpg',
    imgClass: 'topImages__item3',
    h2Class: 'topImages__title3',
    sentence: '練乳はお好みで！！',
  };
  const imageSet4 = {
    src: './images/main_image4.jpg',
    imgClass: 'topImages__item4',
    h2Class: 'topImages__title4',
    sentence: 'ジャム作り体験やってます。',
  };
  const imageSet5 = {
    src: './images/main_image5.jpg',
    imgClass: 'topImages__item5',
    h2Class: 'topImages__title5',
    sentence: '定期購入できちゃいます。',
  };

  return (
    <>
      <section>
        <div class="topImages">
          <TopImageCreate setParamater={imageSet1} />
          <TopImageCreate setParamater={imageSet2} />
          <TopImageCreate setParamater={imageSet3} />
          <TopImageCreate setParamater={imageSet4} />
          <TopImageCreate setParamater={imageSet5} />
        </div>
      </section>
    </>
  );
};
