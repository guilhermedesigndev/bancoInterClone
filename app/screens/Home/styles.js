import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: ${theme.colors.gray};
`;

export const ContainerApp = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;
