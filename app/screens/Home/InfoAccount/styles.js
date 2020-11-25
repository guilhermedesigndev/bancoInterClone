import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

export const ContainerInfoAccount = styled.View``;

export const InfoAccountList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingLeft: 16,
    paddingRight: 16,
  },
})``;

export const CardInfo = styled.View`
  width: 300px;
  height: 190px;
  background: ${theme.colors.white};
  border-radius: 10px;
  justify-content: space-between;
  margin: 4px;
  padding: 20px;
`;

export const CardInfoTitle = styled.Text`
  color: ${theme.colors.black};
  font-size: ${theme.sizes.h2}px;
  font-family: ${theme.fonts.bold};
`;

export const CardInfoContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardInfoImage = styled.Image.attrs({
  resizeMode: 'center',
})`
  flex: 4;
  margin-right: 10px;
`;

export const ContainerInfoDescription = styled.View`
  flex: 6;
`;

export const CardInfoDescription = styled.Text`
  color: ${theme.colors.black};
  font-size: ${theme.sizes.base}px;
  font-family: ${theme.fonts.regular};
`;

export const CardInfoButton = styled.TouchableOpacity`
  background: ${theme.colors.primary};
  width: 80%;
  height: 35px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const CardInfoButtonLabel = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.sizes.base}px;
  font-family: ${theme.fonts.bold};
`;
