import React from 'react';

export const ArrowButton = (props) => {
  return (
    <>
      <div class={props.setParamater.class1}>
        <a href={props.setParamater.href}>
          {props.setParamater.linkTitle}
          <span></span>
          <span></span>
        </a>
      </div>
    </>
  );
};
