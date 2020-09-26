import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/">{props.hamManuList[0]}</Link>
          </li>
          <li class="header__hamManuItem">
            <Link to="/">{props.hamManuList[1]}</Link>
          </li>
          <li class="header__hamManuItem">
            <Link to="/">{props.hamManuList[2]}</Link>
          </li>
          <li class="header__hamManuItem">
            <Link to="/">{props.hamManuList[3]}</Link>
          </li>
          <span></span>
          <div class="header__hamManuSubContainer">
            <li class="header__hamManuItem">
              <Link to="/login">{props.hamManuList[4]}</Link>
            </li>
            <li class="header__hamManuItem">
              <Link to="/">{props.hamManuList[5]}</Link>
            </li>
          </div>
          <span></span>
        </ul>
      </div>
    </>
  );
};
