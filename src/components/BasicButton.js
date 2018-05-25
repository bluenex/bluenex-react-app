import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const ColorTouch = styled.TouchableOpacity`
  height: 50px;
  width: 240px;
  background-color: rgba(252, 80, 80, 1);
  align-self: center;
  border-radius: 999px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function BasicButton(props) {
  return (
    <ColorTouch onPress={props.onPress}>{props.children}</ColorTouch>
  );
}

BasicButton.defaultProps = {
  children: null,
  onPress: () => {},
};

BasicButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
