import React from 'react';
import {StyleSheet} from 'react-native';

import {
  Header,
  ContainerHeader,
  ContainerHeaderSaldo,
  BalanceLabel,
  BalanceContainer,
  BalanceAccount,
  BalanceValue,
  ContainerHeaderUser,
  PhotoUser,
} from './styles';

import Icon from '~/components/Icons';

export default function HeaderApp() {
  return (
    <Header>
      <ContainerHeader>
        <ContainerHeaderSaldo>
          <BalanceLabel>Saldo em conta</BalanceLabel>

          <BalanceContainer>
            <BalanceAccount>
              R$ <BalanceValue>0,33</BalanceValue>
            </BalanceAccount>

            <Icon name="eye-outline" color={'#FFFFFF'} width={28} height={28} />
          </BalanceContainer>

          <BalanceLabel>Atualizado neste momento</BalanceLabel>
        </ContainerHeaderSaldo>

        <ContainerHeaderUser>
          <PhotoUser style={styles.imageStyle} />
        </ContainerHeaderUser>
      </ContainerHeader>
    </Header>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});
