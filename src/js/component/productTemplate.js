import React from 'react';

export const ProductTemplate = (props) => {
  return (
    <>
      <div class="products__partBox">
        <a href="">
          <div class="products__boxFrame">
            <img src={props.setParamater.src} />
          </div>
          <div class="products__explanation">
            <ul>
              <li>{props.setParamater.location}</li>
              <li>{props.setParamater.kind}</li>
              <li>{props.setParamater.price}</li>
            </ul>
          </div>
        </a>
      </div>
    </>
  );
};
