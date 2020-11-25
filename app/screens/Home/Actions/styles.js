import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

export const ContainerActions = styled.View`
  margin: -50px 12px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionsList = styled.FlatList`
  flex-grow: 1;
`;

export const ActionsListEmpty = styled.View`
  flex: 1;
  padding: 5px;
  margin: 5px;
`;

export const ActionsCard = styled.TouchableOpacity`
  width: 31%;
  height: 110px;
  background: ${theme.colors.white};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 4px;
`;

export const ActionsIconContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: ${50 / 2}px;
  background: ${theme.colors.orangeLight};
  justify-content: center;
  align-items: center;
`;

export const ActionsLabel = styled.Text`
  margin-top: 10px;
  color: ${theme.colors.black};
  font-size: ${theme.sizes.base}px;
  font-family: ${theme.fonts.light};
`;

export const ExpandActionsContainer = styled.View`
  margin: 30px 0px 10px 0px;
  justify-content: center;
  align-items: center;
`;

export const ExtpandActionsButton = styled.TouchableOpacity``;
