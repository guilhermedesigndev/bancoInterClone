import React from 'react';
import {Icon} from 'react-native-eva-icons';

export default function Icons({
  name,
  color = '#FF7A01',
  width = 24,
  height = 24,
}) {
  return <Icon name={name} width={width} height={height} fill={color} />;
}
