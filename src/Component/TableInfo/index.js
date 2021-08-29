import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  text-align: center;
`;

const TableInfo = ({ info }) => {
  if (!!info || info.size === 0) return <p>no se a encontrado la informacion que busca</p>;
  return (
    <StyledTable>
      <tr>
        <th>IP</th>
        <th>Nombre</th>
        <th>Size</th>
        <th>Modelo</th>
      </tr>
      {info.map(({ ip, nombre, modelo, size }) => (
        <tr>
          <td>{ip}</td>
          <td>{nombre}</td>
          <td>{size}</td>
          <td>{modelo}</td>
        </tr>
      ))}
    </StyledTable>
  );
};

TableInfo.propTypes = {
  info: PropTypes.array,
};

TableInfo.defaultProps = {
  info: [],
};

export default TableInfo;
