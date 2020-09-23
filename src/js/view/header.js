import React from 'react';

import { Hambarger } from '../component/hambarger';

export const Header = () => {
  const manuList = ['Products', 'About', 'Field', 'Support/FAQ', 'Login', 'Sign Up'];
  return (
    <>
      <section>
        <header class="header">
          <h1 class="header__logoTitle">
            <a href="index.html">m</a>
          </h1>
          <nav class="header__nav">
            <ul class="header__manuFirstGroup">
              <li class="header__manuFGList">
                <a href="">{manuList[0]}</a>
              </li>
              <li class="header__manuFGList">
                <a href="">{manuList[1]}</a>
              </li>
              <li class="header__manuFGList">
                <a href="">{manuList[2]}</a>
              </li>
              <li class="header__manuFGList">
                <a href="">{manuList[3]}</a>
              </li>
            </ul>
            <ul class="header__manuSecondGroup">
              <li class="header__manuSGList">
                <a href="">{manuList[4]}</a>
              </li>
              <li class="header__manuSGList">
                <a href="">{manuList[5]}</a>
              </li>
            </ul>
          </nav>
          <Hambarger hamManuList={manuList} />
        </header>
      </section>
    </>
  );
};
