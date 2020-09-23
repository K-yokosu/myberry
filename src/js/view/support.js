import React from 'react';
import { SupportContainer } from '../component/supportContainer';

export const Support = () => {
  const faq = {
    subTitle: 'よくあるご質問',
    sentence:
      '本サービスについて、 よくあるご質問をまとめさせていただきました。ご不明点がございましたら、 お問い合わせの前にこちらをご覧ください。',
    href: '',
    linkTitle: 'よくあるご質問',
  };
  const contact = {
    subTitle: 'お問い合わせ先',
    sentence:
      '本サービスに関するご質問がございましたら、 お問い合わせフォームよりご連絡ください。担当より追ってご連絡させていただきます。',
    href: '',
    linkTitle: 'お問い合わせフォーム',
  };

  return (
    <>
      <section id="support">
        <div class="support">
          <h1 class="support__title">Support / FAQ</h1>
          <div class="support__ContainerContainer">
            <SupportContainer setParamater={faq} />
            <SupportContainer setParamater={contact} />
          </div>
        </div>
      </section>
    </>
  );
};
