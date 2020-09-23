import React from 'react';
import { ProductTemplate } from '../component/productTemplate';
import { ArrowButton } from '../component/arrowButton';

export const Product = () => {
  const amaou_yk = {
    src: './images/products_amaou.JPG',
    location: '○県○市',
    kind: 'あまおう',
    price: '￥１０００〜',
  };
  const tochiotome_yk = {
    src: './images/products_tochiotome.JPG',
    location: '○県○市',
    kind: 'とちおとめ',
    price: '￥１２００〜',
  };
  const random = {
    src: './images/products_amaou.JPG',
    location: 'random',
    kind: 'random',
    price: '￥２０００〜',
  };
  const allProducts = {
    class1: 'products__allBox__active',
    href: '',
    linkTitle: 'View All Products',
  };

  return (
    <>
      <section id="products">
        <div class="products">
          <h1 class="products__title">Products</h1>
          <div class="products__shelf">
            <ProductTemplate setParamater={amaou_yk} />
            <ProductTemplate setParamater={tochiotome_yk} />
            <ProductTemplate setParamater={random} />
          </div>
          <ArrowButton setParamater={allProducts} />
        </div>
      </section>
    </>
  );
};
