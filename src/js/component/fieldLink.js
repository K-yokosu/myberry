import React from 'react';

export const FieldLink = (props) => {
  return (
    <>
      <a href={props.setParamater.href}>
        {props.setParamater.location}
        <div class="fieldList__shopListUnderLine"></div>
        <span></span>
        <span></span>
      </a>
    </>
  );
};
