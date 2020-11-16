import styled from 'styled-components';

import GearIcon from '../../assets/icons/settings';

export const Container = styled.View`
  padding: 20px;
  flex: 1;
  background-color: #151515;
  justify-content: center;
  /* align-items: center; */
`;

export const ContainerWelcome = styled.View`

`;

export const WelcomeText = styled.Text`
  color: #fff;
  font-size: 32px;
  font-family: 'roboto-bold'
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'roboto-regular'
`;
export const IconButton = styled(GearIcon)`
/* fill: #fff */
`;
