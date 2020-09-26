import React from 'react';
import '../../image/main_image1.jpg';
import '../../image/main_image2.jpg';
import '../../image/main_image3.jpg';
import '../../image/main_image4.jpg';
import '../../image/main_image5.jpg';
import '../../image/icon_arrow.png';
import '../../image/icon_map.png';
import '../../image/products_amaou.JPG';
import '../../image/products_tochiotome.JPG';
import '../../image/about_image.jpg';
import '../../image/store_image.jpg';
import { Header } from './../view/header';
import { TopImage } from './../view/topImage';
import { Product } from './../view/product';
import { About } from './../view/about';
import { Field } from './../view/field';
import { Support } from './../view/support';
import { Footer } from './../view/footer';

export const Top = () => {
  return (
    <>
      <Header />
      <TopImage />
      <Product />
      <About />
      <Field />
      <Support />
      <Footer />
    </>
  );
};
