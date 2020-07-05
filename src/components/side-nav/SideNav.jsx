import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: white;
  text-decoration: none;
  list-style: none;
  display: flex;
  width: 150px;
`;

function SideNav() {
  return (
    <Wrapper>
      <nav>
        <ul className='list-unstyled ml-4 mt-5'>
          <li>
            <Link to='/items'>Items</Link>
          </li>
          <li>
            <Link to='/clients'>Clients</Link>
          </li>
          <li>
            <Link to='/diversities'>Diversity</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
}

export default SideNav;
