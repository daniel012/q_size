import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageWraper = styled.img`
  width: 14px;
  padding-top: 2px;
`;

const ButtonStyle = styled.button`
  padding: 5px 20px;
  margin-top: 5px;
`;

const Button = ({ isLoading, text, ...props }) => (
  <ButtonStyle {...props}>
    {isLoading && (
      <ImageWraper src={`${process.env.PUBLIC_URL}/loading.jpg`} alt="icono de espera" />
    )}
    {text}
  </ButtonStyle>
);

Button.propTypes = {
  isLoading: PropTypes.bool,
  text: PropTypes.string,
};

Button.defaultProps = {
  isLoading: false,
  text: 'empty',
};

export default Button;
