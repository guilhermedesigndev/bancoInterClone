import React from 'react';

import Icon from '~/components/Icons';

import createRows from '~/helpers/createRows';

import {
  ContainerContentOptions,
  CardInterShop,
  CardInterShopContainer,
  CardInterShopImage,
  CardInterTitle,
  CardInterDescription,
  ContainerOthersCards,
  CardInterTravel,
  CardInterShell,
  LifeStyleContainer,
  LifeStyleTitle,
  LifeStyleList,
  LifeStyleListEmpty,
  LifeStyleCard,
  LifeStyleIconContainer,
  LifeStyleLabel,
  LineSeparator,
  ContainerActions,
  ActionsImageContainer,
  ActionsImage,
  ActionsTextContainer,
  ActionsTextTitle,
  ActionsTextDescription,
  ActionsIconContainer,
} from './styles';

import ShopInter from '~/assets/images/loja.png';
import Babi from '~/assets/images/babi.png';
import iSafe from '~/assets/images/iSafe.png';

const NUM_COLUMNS = 3;

const lifeStyleitems = [
  {id: '01', label: 'Casa', icon: 'home'},
  {id: '02', label: 'Entreterimento', icon: 'film'},
  {id: '03', label: 'Tecnologia', icon: 'smartphone'},
  {id: '04', label: 'Transporte', icon: 'car'},
  {id: '05', label: 'Esporte', icon: 'flag'},
  {id: '06', label: 'Viajem', icon: 'briefcase'},
  {id: '07', label: 'Saúde', icon: 'heart'},
  {id: '08', label: 'Beleza', icon: 'scissors'},
  {id: '09', label: 'Moda', icon: 'pricetags'},
];

export default function ContentOptions() {
  function renderItemListLifeStyle({item}) {
    if (item.empty) {
      return <LifeStyleListEmpty />;
    }

    return (
      <LifeStyleCard>
        <LifeStyleIconContainer>
          <Icon name={item.icon} width={42} height={42} />
        </LifeStyleIconContainer>

        <LifeStyleLabel>{item.label}</LifeStyleLabel>
      </LifeStyleCard>
    );
  }

  return (
    <>
      <ContainerContentOptions>
        <CardInterShop>
          <CardInterShopContainer>
            <Icon name="shopping-cart-outline" width={42} height={42} />
            <CardInterTitle>Inter Shop</CardInterTitle>
            <CardInterDescription>Compre e ganhe cashback</CardInterDescription>
          </CardInterShopContainer>

          <CardInterShopImage
            source={ShopInter}
            style={{
              width: 120,
              height: 120,
            }}
          />
        </CardInterShop>

        <ContainerOthersCards>
          <CardInterTravel>
            <Icon name="paper-plane-outline" width={42} height={42} />
            <CardInterTitle>Inter Travel</CardInterTitle>
            <CardInterDescription>
              Receba cashback em passagens aéreas
            </CardInterDescription>
          </CardInterTravel>

          <CardInterShell>
            <Icon name="smartphone-outline" width={42} height={42} />
            <CardInterTitle>Shell Box</CardInterTitle>
            <CardInterDescription>
              Abasteça seu vículo com cashback
            </CardInterDescription>
          </CardInterShell>
        </ContainerOthersCards>

        <LifeStyleContainer>
          <LifeStyleTitle>Estilo de vida</LifeStyleTitle>

          <LifeStyleList
            data={createRows(lifeStyleitems, NUM_COLUMNS)}
            keyExtractor={(item) => item.id}
            renderItem={renderItemListLifeStyle}
            numColumns={NUM_COLUMNS}
            columnWrapperStyle={{
              flex: 1,
              justifyContent: 'space-between',
            }}
          />
        </LifeStyleContainer>

        <LineSeparator />

        <ContainerActions>
          <ActionsImageContainer>
            <ActionsImage
              source={Babi}
              resizeMode="stretch"
              style={{
                width: 80,
                height: 90,
              }}
            />
          </ActionsImageContainer>

          <ActionsTextContainer>
            <ActionsTextTitle>Oi, posso ajudar?</ActionsTextTitle>
            <ActionsTextDescription>
              A Babi vai te ajudar com todo o conteúdo da nossa central.
            </ActionsTextDescription>
          </ActionsTextContainer>

          <ActionsIconContainer>
            <Icon name="arrow-ios-forward-outline" width={32} height={32} />
          </ActionsIconContainer>
        </ContainerActions>

        <ContainerActions>
          <ActionsImageContainer>
            <ActionsImage
              source={iSafe}
              resizeMode="center"
              style={{
                width: 60,
                height: 60,
                marginTop: 15,
                marginBottom: 15,
              }}
            />
          </ActionsImageContainer>

          <ActionsTextContainer>
            <ActionsTextTitle>iSafe</ActionsTextTitle>
            <ActionsTextDescription>
              Token para autenticar as suas transações na Conta Digital
            </ActionsTextDescription>
          </ActionsTextContainer>

          <ActionsIconContainer>
            <Icon name="arrow-ios-forward-outline" width={32} height={32} />
          </ActionsIconContainer>
        </ContainerActions>
      </ContainerContentOptions>
    </>
  );
}
