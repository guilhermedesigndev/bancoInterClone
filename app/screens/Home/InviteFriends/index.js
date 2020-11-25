import React from 'react';

import {
  Container,
  ContainerInvite,
  InviteTitle,
  InviteDescription,
  ButtonInvite,
  ButtonInviteLabel,
  ContainerImageInvite,
  ImageInvite,
} from './styles';

import Invite from '~/assets/images/invite.png';

export default function InviteFriends() {
  return (
    <Container>
      <ContainerInvite>
        <InviteTitle>Convide seus amigos</InviteTitle>

        <InviteDescription>
          Indique o Inter e chame todo mundo para simplificar a vida!
        </InviteDescription>

        <ButtonInvite>
          <ButtonInviteLabel>Convidar</ButtonInviteLabel>
        </ButtonInvite>
      </ContainerInvite>

      <ContainerImageInvite>
        <ImageInvite source={Invite} style={{width: 140, height: 140}} />
      </ContainerImageInvite>
    </Container>
  );
}
