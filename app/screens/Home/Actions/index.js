import React from 'react';

import Icon from '~/components/Icons';

import createRows from '~/helpers/createRows';

import {
  ContainerActions,
  ActionsList,
  ActionsListEmpty,
  ActionsCard,
  ActionsIconContainer,
  ActionsLabel,
  ExpandActionsContainer,
  ExtpandActionsButton,
} from './styles';

const NUM_COLUMNS = 3;

const itemsActions = [
  {id: '01', icon: 'flip-2-outline', label: 'Transferência'},
  {id: '02', icon: 'globe-2-outline', label: 'Pix'},
  {id: '03', icon: 'bar-chart-2-outline', label: 'Investimentos'},
];

export default function Actions() {
  function renderItemListActions({item}) {
    if (item.empty) {
      return <ActionsListEmpty />;
    }

    return (
      <ActionsCard>
        <ActionsIconContainer>
          <Icon name={item.icon} />
        </ActionsIconContainer>

        <ActionsLabel>{item.label}</ActionsLabel>
      </ActionsCard>
    );
  }

  return (
    <>
      <ContainerActions>
        <ActionsList
          data={createRows(itemsActions, NUM_COLUMNS)}
          keyExtractor={(item) => item.id}
          renderItem={renderItemListActions}
          numColumns={NUM_COLUMNS}
        />
      </ContainerActions>

      <ExpandActionsContainer>
        <ExtpandActionsButton>
          <Icon name="arrow-ios-downward-outline" width={42} height={42} />
        </ExtpandActionsButton>
      </ExpandActionsContainer>
    </>
  );
}
