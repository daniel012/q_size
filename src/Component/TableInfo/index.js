import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import './index.css';

const Container = styled.div`
  padding: 5px;
`;

const CellInfo = styled.td`
    display: flex;
    flex: 1;
    justify-content: space-around;
    div:nth-child(1) {
      margin-left: 5px;
    }
    div:nth-child(2) {
      width: 90%;
      text-align: center;
    }
`;

const TableInfo = ({ info, action }) => {
  if (!info || info.size === 0) return <p>no se a encontrado la informacion que busca</p>;
  return (
    <Container disabled>
      <table className="greyGridTable">
        <tr>
          <th >IP</th>
          <th>Nombre</th>
          <th>Size</th>
          <th>Modelo</th>
        </tr>
        {info.map(({ ip, nombre, modelo, size }) => (
          <tr>
            <CellInfo>
              <div>
                <Button text="Instalar" style={{padding: '1px 20px'}} onClick={action} name={ip} />
              </div>
              <div>
                {ip}
              </div>
            </CellInfo>
            <td>{nombre}</td>
            <td>{size}</td>
            <td>{modelo}</td>
          </tr>
        ))}
      </table>
    </Container>
  );
};

TableInfo.propTypes = {
  info: PropTypes.array,
  action: PropTypes.func,
};

TableInfo.defaultProps = {
  info: [],
  action: ()=>{},
};

export default TableInfo;
