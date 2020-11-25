import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 16px 0px 16px;
`;

export const ContainerInvite = styled.View`
  flex: 6;
`;

export const InviteTitle = styled.Text`
  color: ${theme.colors.black};
  font-size: ${theme.sizes.h2}px;
  font-family: ${theme.fonts.bold};
  margin-bottom: 10px;
`;

export const InviteDescription = styled.Text`
  color: ${theme.colors.black};
  font-size: ${theme.sizes.base}px;
  font-family: ${theme.fonts.light};
`;

export const ButtonInvite = styled.TouchableOpacity`
  background: ${theme.colors.primary};
  width: 80%;
  height: 35px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonInviteLabel = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.sizes.h2}px;
  font-family: ${theme.fonts.bold};
`;

export const ContainerImageInvite = styled.View`
  flex: 4;
`;

export const ImageInvite = styled.Image``;
