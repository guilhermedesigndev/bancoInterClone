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
      'https://scontent.fjdo1-1.fna.fbcdn.net/v/t1.0-9/31460866_1664325563686677_3995482374660947968_n.jpg?_nc_cat=103&ccb=2&_nc_sid=174925&_nc_ohc=asmwog8B5CgAX_rwlMg&_nc_ht=scontent.fjdo1-1.fna&oh=0c376994db935e0adebbdc6cf00e7c93&oe=5FE3A4DF',
  },
})``;
