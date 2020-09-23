import React from 'react';
import { FieldLink } from '../component/fieldLink';

export const Field = () => {
  const hokkaido = {
    href: '',
    location: '北海道 / 東北',
  };
  const chubu = {
    href: '',
    location: '中部',
  };
  const chugoku = {
    href: '',
    location: '中国 / 四国',
  };
  const kantou = {
    href: '',
    location: '関東',
  };
  const kinki = {
    href: '',
    location: '近畿',
  };
  const kyushu = {
    href: '',
    location: '九州 / 沖縄',
  };

  return (
    <>
      <section id="field">
        <div class="fieldList">
          <h1 class="fieldList__title">Field</h1>
          <div class="fieldList__adressContainer">
            <img class="fieldList__storeImage" src="./images/store_image.jpg" alt="store" />
            <div class="fieldList__imgFilter">
              <p>No Image.</p>
            </div>
            <div class="fieldList__adrDetail">
              <h2 class="fieldList__adtTitle">Offline store</h2>
              <div class="fieldList__sentenceBox">
                <p class="fieldList__sentence">
                  myberryが運営する唯一のオフラインストア 「offline
                  store」。10坪程度の小さな店舗では,
                  myberryのフルラインナップ展示販売を始め、myberryの
                  苺愛を雲団に取り入れたアイテムを揃えています。
                </p>
              </div>
              <address class="fieldList__adressBox">
                <p class="fieldList__adrList">住所 /　〒131-8634 東京都墨田区押上１丁目１−２</p>
                <p class="fieldList__adrList">営業 /　11:00 - 19:00（水 定休）</p>
                <p class="fieldList__adrList">電話 /　0120-xxx-xxx</p>
              </address>
              <div class="fieldList__mapBox__active">
                <img class="fieldList__iconMap" src="./images/icon_map.png" alt="map" />
                <a href="https://www.google.co.jp/maps/place/%E6%9D%B1%E4%BA%AC%E3%82%B9%E3%82%AB%E3%82%A4%E3%83%84%E3%83%AA%E3%83%BC/@35.7100627,139.8085117,17z/data=!3m1!4b1!4m5!3m4!1s0x60188ed0d12f9adf:0x7d1d4fb31f43f72a!8m2!3d35.7100627!4d139.8107004?hl=ja">
                  地図
                </a>
              </div>
            </div>
          </div>
          <div class="fieldList__shopListContainer">
            <h2 class="fieldList__shopListTitle">Find Your Field</h2>
            <div class="fieldList__shopListBox">
              <div class="fieldList__shopListBoxLine">
                <FieldLink setParamater={hokkaido} />
                <FieldLink setParamater={chubu} />
                <FieldLink setParamater={chugoku} />
              </div>
              <div class="fieldList__shopListBoxLine">
                <FieldLink setParamater={kantou} />
                <FieldLink setParamater={kinki} />
                <FieldLink setParamater={kyushu} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
