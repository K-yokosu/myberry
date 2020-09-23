import React from 'react';
import { ArrowButton } from '../component/arrowButton';

export const SupportContainer = (props) => {
  const propsHref = props.setParamater.href;
  const linkTit = props.setParamater.linkTitle;
  const arrowBtn = {
    class1: 'support__arrowButton',
    href: propsHref,
    linkTitle: linkTit,
  };

  return (
    <>
      <div class="support__Container">
        <h2 class="support__ContainerTitle">{props.setParamater.subTitle}</h2>
        <p class="support__Sentence">{props.setParamater.sentence}</p>
        <ArrowButton setParamater={arrowBtn} />
      </div>
    </>
  );
};
