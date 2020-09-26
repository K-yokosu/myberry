import React from 'react';
import { Link } from 'react-router-dom';
import { Hambarger } from '../component/hambarger';

export const Header = () => {
  const manuList = ['Products', 'About', 'Field', 'Support/FAQ', 'Login', 'Sign Up'];
  return (
    <>
      <section>
        <header class="header">
          <h1 class="header__logoTitle">
            <Link to="/">m</Link>
          </h1>
          <nav class="header__nav">
            <ul class="header__manuFirstGroup">
              <li class="header__manuFGList">
                <Link to="/">{manuList[0]}</Link>
              </li>
              <li class="header__manuFGList">
                <Link to="/">{manuList[1]}</Link>
              </li>
              <li class="header__manuFGList">
                <Link to="/">{manuList[2]}</Link>
              </li>
              <li class="header__manuFGList">
                <Link to="/">{manuList[3]}</Link>
              </li>
            </ul>
            <ul class="header__manuSecondGroup">
              <li class="header__manuSGList">
                <Link to="/login">{manuList[4]}</Link>
              </li>
              <li class="header__manuSGList">
                <Link to="/">{manuList[5]}</Link>
              </li>
            </ul>
          </nav>
          <Hambarger hamManuList={manuList} />
        </header>
      </section>
    </>
  );
};
