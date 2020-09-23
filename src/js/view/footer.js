import React from 'react';

export const Footer = () => {
  return (
    <>
      <section>
        <footer class="footer">
          <h1 class="footer__title">myberry</h1>
          <div class="footer__linkContainerContainer__active">
            <div class="footer__linkContainer">
              <a href="#products">Products</a>
              <a href="#">First rank</a>
              <a href="#">Second rank</a>
              <a href="#">randam</a>
              <a href="#">All</a>
            </div>
            <div class="footer__linkContainer">
              <a href="#about">About</a>
            </div>
            <div class="footer__linkContainer">
              <a href="#field">Field</a>
              <a href="https://www.google.co.jp/maps/place/%E6%9D%B1%E4%BA%AC%E3%82%B9%E3%82%AB%E3%82%A4%E3%83%84%E3%83%AA%E3%83%BC/@35.7100627,139.8085117,17z/data=!3m1!4b1!4m5!3m4!1s0x60188ed0d12f9adf:0x7d1d4fb31f43f72a!8m2!3d35.7100627!4d139.8107004?hl=ja">
                map
              </a>
              <a href="#">Field List</a>
            </div>
            <div class="footer__linkContainer">
              <a href="#support">Support / FAQ</a>
              <a href="#">Questions</a>
              <a href="#">Contact</a>
            </div>
            <div class="footer__linkContainer">
              <a href="#">Login</a>
              <a href="#">Sign Up</a>
            </div>
          </div>
          <p>
            <small>©︎ myberry All right reserved.</small>
          </p>
        </footer>
      </section>
    </>
  );
};
