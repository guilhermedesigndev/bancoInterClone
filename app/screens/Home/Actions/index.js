import React, {useState} from 'react';
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
  {id: '04', icon: 'credit-card-outline', label: 'Cartões'},
  {id: '05', icon: 'gift-outline', label: 'Gift Card'},
  {id: '06', icon: 'file-outline', label: 'Pagamentos'},
  {id: '07', icon: 'umbrella-outline', label: 'Seguros'},
  {id: '08', icon: 'file-text-outline', label: 'Depósito por boleto'},
  {id: '09', icon: 'email-outline', label: 'Depósito por cheque'},
  {id: '10', icon: 'person-done-outline', label: 'Conta MEI'},
  {id: '11', icon: 'calendar-outline', label: 'Agendamentos'},
  {id: '12', icon: 'file-add-outline', label: 'Portabilidade de salário'},
  {id: '13', icon: 'file-add-outline', label: 'Empréstimo'},
  {id: '14', icon: 'home-outline', label: 'Financiamento imobiliário'},
  {id: '15', icon: 'calendar-outline', label: 'Débito automático'},
  {id: '16', icon: 'shield-outline', label: 'Consórcio'},
  {id: '17', icon: 'swap-outline', label: 'Câmbio'},
  {id: '18', icon: 'smartphone-outline', label: 'Recarga'},
  {id: '19', icon: 'grid-outline', label: 'Interpag'},
  {id: '20', icon: 'smartphone-outline', label: 'Intercel'},
  {id: '21', icon: 'refresh-outline', label: 'Cashback'},
];

export default function Actions() {
  const [qtdMaxItens, setQtdMaxItens] = useState(3);
  const [isExpandItens, setIsExpandItens] = useState(false);

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

  function handleExpandItens() {
    setIsExpandItens(!isExpandItens);

    if (isExpandItens) {
      setQtdMaxItens(itemsActions.length);
    } else {
      setQtdMaxItens(3);
    }
  }

  return (
    <>
      <ContainerActions>
        <ActionsList
          data={createRows(itemsActions.slice(0, qtdMaxItens), NUM_COLUMNS)}
          keyExtractor={(item) => item.id}
          renderItem={renderItemListActions}
          numColumns={NUM_COLUMNS}
        />
      </ContainerActions>

      <ExpandActionsContainer>
        <ExtpandActionsButton onPress={() => handleExpandItens()}>
          <Icon
            name={
              !isExpandItens
                ? 'arrow-ios-upward-outline'
                : 'arrow-ios-downward-outline'
            }
            width={42}
            height={42}
          />
        </ExtpandActionsButton>
      </ExpandActionsContainer>
    </>
  );
}
