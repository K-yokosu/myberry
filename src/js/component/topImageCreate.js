import React from 'react';

export const TopImageCreate = (props) => {
  return (
    <>
      <div>
        <img src={props.setParamater.src} class={props.setParamater.imgClass} />
        <h2 class={props.setParamater.h2Class}>{props.setParamater.sentence}</h2>
      </div>
    </>
  );
};
