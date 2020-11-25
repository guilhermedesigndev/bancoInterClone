import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

export const Header = styled.View`
  width: 100%;
  height: 180px;
  background: ${theme.colors.primary};
`;

export const ContainerHeader = styled.View`
  margin: 30px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerHeaderSaldo = styled.View``;

export const BalanceLabel = styled.Text`
  color: ${theme.colors.whiteLight};
  font-size: ${theme.sizes.base}px;
  font-family: ${theme.fonts.light};
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BalanceAccount = styled.Text`
  color: ${theme.colors.whiteLight};
  font-size: ${theme.sizes.h1}px;
  font-family: ${theme.fonts.bold};
  margin: 4px 16px 4px 0px;
`;

export const BalanceValue = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.sizes.h1 + 3}px;
  font-family: ${theme.fonts.bold};
`;

export const ContainerHeaderUser = styled.View``;

export const PhotoUser = styled.Image.attrs({
  resizeMode: 'cover',
  source: {
    uri:
      'https://i.pinimg.com/originals/18/e3/82/18e382668b4f22014935ad9dfbd07436.jpg',
  },
})``;
