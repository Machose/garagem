import React from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import {
  TableContainer,
  TableInfo,
  TableContent,
  Amount,
  Search,
} from './styles';

export default function Table({ headings = [], rows = [] }) {
  return (
    <TableContainer>
      <TableInfo>
        <Amount>
          <label> Quantidade por pagina</label>
          <select name="" id="">
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </Amount>
        <Search placeholder="Faça sua pesquisa" />
      </TableInfo>
      <TableContent>
        <thead>
          <tr>
            {headings.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value) => (
                <td key={value}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableContent>
      <TableInfo>
        {/* <p>1 Itens encontradores de 10 itens no notal</p> */}
        {/* <PageCount>
          <button>
            <FaArrowLeft />
          </button>
          <input type="number" value="1" readOnly />
          <button>
            <FaArrowRight />
          </button>
        </PageCount> */}
      </TableInfo>
    </TableContainer>
  );
}
