import React from 'react';

import StatusBar from '~/components/Statusbar';

import {Wrapper, ContainerApp} from './styles';

import Header from './Header';
import Actions from './Actions';
import InfoAccount from './InfoAccount';
import ContentOptions from './ContentOptions';
import InviteFriends from './InviteFriends';

export default function Home() {
  return (
    <>
      <StatusBar />

      <Wrapper>
        <ContainerApp>
          <Header />
          <Actions />
          <InfoAccount />
          <ContentOptions />
          <InviteFriends />
        </ContainerApp>
      </Wrapper>
    </>
  );
}
