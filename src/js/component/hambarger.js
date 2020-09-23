import React from 'react';

export const Hambarger = (props) => {
  return (
    <>
      <div class="header__hamManu">
        <span class="header__stick1"></span>
        <span class="header__stick2"></span>
      </div>
      <div class="header__hamManuFilm"></div>
      <div class="header__hamManuContainerContainer">
        <ul class="header__hamManuContainer">
          <li class="header__hamManuItem">
            <a href="">{props.hamManuList[0]}</a>
          </li>
          <li class="header__hamManuItem">
            <a href="">{props.hamManuList[1]}</a>
          </li>
          <li class="header__hamManuItem">
            <a href="">{props.hamManuList[2]}</a>
          </li>
          <li class="header__hamManuItem">
            <a href="">{props.hamManuList[3]}</a>
          </li>
          <span></span>
          <div class="header__hamManuSubContainer">
            <li class="header__hamManuItem">
              <a href="">{props.hamManuList[4]}</a>
            </li>
            <li class="header__hamManuItem">
              <a href="">{props.hamManuList[5]}</a>
            </li>
          </div>
          <span></span>
        </ul>
      </div>
    </>
  );
};
