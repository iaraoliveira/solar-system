import styled from 'styled-components';

import ForwardIcon from '../../assets/icons/forward.svg';

import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #151515;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;

  margin: 50px;

  /* align-self: center */

`;

export const Subtitle = styled.Text`
  color: #fff;
  font-family: 'roboto-regular';
  font-size: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: 'roboto-bold';
  font-size: 32px;

  text-align: center;
`;


export const Span = styled.Text`
  color: #fff;
  font-family: 'roboto-regular';
  font-size: 14px;

  margin-bottom: 16px;
`;

export const Button = styled(RectButton)`
  background-color: #EF5F53;

  border-radius: 8px;
  height: 51px;
  width: 206px;

  flex-direction:row;
  justify-content: space-around;
  align-items:center;

`;

export const TextButton = styled.Text`
  color: #fff;
  font-family: 'roboto-bold';
  font-size: 16px;
`
export const IconButton = styled(ForwardIcon)`
  /* fill: #fff; */
`


