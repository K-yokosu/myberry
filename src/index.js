import './css/app.scss';
import './image/main_image1.jpg';
import './image/main_image2.jpg';
import './image/main_image3.jpg';
import './image/main_image4.jpg';
import './image/main_image5.jpg';
import './image/icon_arrow.png';
import './image/icon_map.png';
import './image/products_amaou.JPG';
import './image/products_tochiotome.JPG';
import './image/about_image.jpg';
import './image/store_image.jpg';

window.addEventListener(
  'DOMContentLoaded',
  function () {
    let hamManu = document.querySelector('.header__hamManu');
    let hamManuBox = document.querySelector('.header__hamManuContainerContainer');
    let hamManuFilm = document.querySelector('.header__hamManuFilm');
    let prodShelf = document.querySelector('.products__shelf');
    let prodAllBox = document.querySelector('.products__allBox__active');
    let fieldMap = document.querySelector('.fieldList__mapBox__active');
    let supConCon = document.querySelector('.support__ContainerContainer');
    let footerLinkConCon = document.querySelector('.footer__linkContainerContainer__active');

    hamManu.onclick = () => {
      hamManu.classList.toggle('header__hamManu__active');
      hamManuBox.classList.toggle('header__hamManuContainerContainer__active');
      hamManuFilm.classList.toggle('header__hamManuFilm__active');
      prodShelf.classList.toggle('products__shelf__active');
      prodAllBox.classList.toggle('products__allBox');
      fieldMap.classList.toggle('fieldList__mapBox');
      supConCon.classList.toggle('support__ContainerContainer__active');
      footerLinkConCon.classList.toggle('footer__linkContainerContainer');
    };
    hamManuFilm.onclick = () => {
      hamManu.classList.toggle('header__hamManu__active');
      hamManuBox.classList.toggle('header__hamManuContainerContainer__active');
      hamManuFilm.classList.toggle('header__hamManuFilm__active');
      prodShelf.classList.toggle('products__shelf__active');
      fieldMap.classList.toggle('fieldList__mapBox');
      supConCon.classList.toggle('support__ContainerContainer__active');
      footerLinkConCon.classList.toggle('footer__linkContainerContainer');
    };
  },
  false
);

window.addEventListener(
  'scroll',
  () => {
    const scrollVal = window.pageYOffset;
    let win_hei = window.innerHeight;
    let manuFGlist = document.querySelector('.header__manuFirstGroup');
    let manuSGlist = document.querySelector('.header__manuSecondGroup');
    let logoTitle = document.querySelector('.header__logoTitle');
    let hamManuStick1 = document.querySelector('.header__stick1');
    let hamManuStick2 = document.querySelector('.header__stick2');

    if (scrollVal < win_hei || (scrollVal >= win_hei * 2 && scrollVal < win_hei * 3)) {
      manuFGlist.classList.remove('header__manuFirstGroup__colReverse');
      hamManuStick1.classList.remove('header__stick1__colReverse');
      hamManuStick2.classList.remove('header__stick2__colReverse');
      manuSGlist.classList.remove('header__manuSecondGroup__colReverse');
      logoTitle.classList.remove('header__logoTitle__colReverse');
    } else if (scrollVal >= win_hei) {
      manuFGlist.classList.add('header__manuFirstGroup__colReverse');
      hamManuStick1.classList.add('header__stick1__colReverse');
      hamManuStick2.classList.add('header__stick2__colReverse');
      manuSGlist.classList.add('header__manuSecondGroup__colReverse');
      logoTitle.classList.add('header__logoTitle__colReverse');
    }
  },
  false
);
