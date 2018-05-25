import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

import BasicButton from './BasicButton';

storiesOf('Buttons', module).add('basicButton', () => <MiniApp />);

const Wrapper = styled.ScrollView`
  flex: 1;
  padding: 10px;
`;

const TextDisplay = styled.View`
  flex-direction: row;
`;

const TextBlue = styled.Text`
  color: #ddd;
  font-size: 20;
  font-weight: bold;
`;

const MiniApp = () => <Wrapper>
  <BasicButton>
    <TextBlue>
      TEST BUTTON
    </TextBlue>
  </BasicButton>
</Wrapper>;
