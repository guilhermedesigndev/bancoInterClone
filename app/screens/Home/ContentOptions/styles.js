import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

export const ContainerContentOptions = styled.View`
  margin-top: 20px;
  background: ${theme.colors.white};
  padding: 16px;
`;

export const CardInterShop = styled.View`
  width: 100%;
  height: auto;
  border: 1px solid ${theme.colors.orangeLight};
  border-radius: 10px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardInterShopContainer = styled.View`
  flex: 4;
`;

export const CardInterShopImage = styled.Image.attrs({
  resizeMode: 'center',
})`
  flex: 6;
  margin-right: 10px;
`;

export const CardInterTitle = styled.Text`
  color: ${theme.colors.black};
  font-size: ${theme.sizes.base}px;
  font-family: ${theme.fonts.bold};
  margin-top: 5px;
`;

export const CardInterDescription = styled.Text`
  color: ${theme.colors.black};
  font-size: ${theme.sizes.base}px;
  font-family: ${theme.fonts.light};
`;

export const ContainerOthersCards = styled.View`
  flex-direction: row;
`;

export const CardInterTravel = styled.View`
  width: 49%;
  height: auto;
  border: 1px solid ${theme.colors.orangeLight};
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  margin-right: 10px;
`;

export const CardInterShell = styled.View`
  width: 49%;
  height: auto;
  border: 1px solid ${theme.colors.orangeLight};
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  margin-right: 10px;
`;

export const LifeStyleContainer = styled.View`
  margin-top: 30px;
  justify-content: space-between;
`;

export const LifeStyleTitle = styled.Text`
  color: ${theme.colors.black};
  font-family: ${theme.fonts.bold};
  font-size: ${theme.sizes.h2 + 3}px;
  margin-bottom: 10px;
`;

export const LifeStyleList = styled.FlatList``;

export const LifeStyleListEmpty = styled.View`
  flex: 1;
  padding: 5px;
  margin: 5px;
`;

export const LifeStyleCard = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const LifeStyleIconContainer = styled.View`
  height: 70px;
  width: 70px;
  border-radius: ${70 / 2}px;
  background: ${theme.colors.gray};
  justify-content: center;
  align-items: center;
`;

export const LifeStyleLabel = styled.Text`
  color: ${theme.colors.black};
  font-size: ${theme.sizes.base}px;
  font-family: ${theme.fonts.light};
  margin-top: 10px;
`;

export const LineSeparator = styled.View`
  width: 100%;
  height: 1px;
  margin-bottom: 30px;
  background: ${theme.colors.gray};
`;

export const ContainerActions = styled.View`
  width: 100%;
  height: auto;
  border: 1px solid ${theme.colors.orangeLight};
  border-radius: 10px;
  padding: 0px 10px 0px 10px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const ActionsImageContainer = styled.View`
  flex: 2;
  align-items: flex-start;
  margin-right: 20px;
`;

export const ActionsImage = styled.Image``;

export const ActionsTextContainer = styled.View`
  flex: 6;
`;

export const ActionsTextTitle = styled.Text`
  color: ${theme.colors.black};
  font-size: ${theme.sizes.h2}px;
  font-family: ${theme.fonts.bold};
`;

export const ActionsTextDescription = styled.Text`
  color: ${theme.colors.backlight};
  font-size: ${theme.sizes.base}px;
  font-family: ${theme.fonts.regular};
`;

export const ActionsIconContainer = styled.View`
  flex: 2;
  align-items: flex-end;
`;
