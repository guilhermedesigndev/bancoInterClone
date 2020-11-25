import React from 'react';

import {
  ContainerInfoAccount,
  InfoAccountList,
  CardInfo,
  CardInfoTitle,
  CardInfoContent,
  CardInfoImage,
  ContainerInfoDescription,
  CardInfoDescription,
  CardInfoButton,
  CardInfoButtonLabel,
} from './styles';

import CreditCardIcon from '~/assets/images/credit-card-icon.png';

const itemsInfoAccount = [
  {
    id: '01',
    title: 'Tenha limite de crédito na hora',
    description:
      'Invista no CDB Mais Limite de Crédito e libere seu crédito para usar como quiser.',
  },
  {
    id: '02',
    title: 'Extrato de cashback',
    description:
      'Compre na nossa loja e receba parte do dinheiro de volta, direto na sua conta',
  },
];

export default function InfoAccount() {
  function renderItemListInfoAccount({item}) {
    return (
      <CardInfo>
        <CardInfoTitle>{item.title}</CardInfoTitle>

        <CardInfoContent>
          <CardInfoImage
            source={CreditCardIcon}
            style={{
              width: 60,
              height: 60,
            }}
          />

          <ContainerInfoDescription>
            <CardInfoDescription>{item.description}</CardInfoDescription>

            <CardInfoButton>
              <CardInfoButtonLabel>Investir agora</CardInfoButtonLabel>
            </CardInfoButton>
          </ContainerInfoDescription>
        </CardInfoContent>
      </CardInfo>
    );
  }

  return (
    <ContainerInfoAccount>
      <InfoAccountList
        data={itemsInfoAccount}
        keyExtractor={(item) => item.id}
        renderItem={renderItemListInfoAccount}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </ContainerInfoAccount>
  );
}
