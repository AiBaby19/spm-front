import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ItemManager from './components/item/ItemManager';
import ClientManager from './components/client/ClientManager';
import DiversityManager from './components/diversity/DiversityManager';

import SideNav from './components/side-nav/SideNav';
import styled from 'styled-components';

import './App.css';

const NavWrapper = styled.div`
  height: 100vh;
  width: 150px;
  background: lightblue;
`;

const OutletWrapper = styled.div`
  height: 100vh;
  margin: 50px 50px;
`;

function App() {
  return (
    <Router>
      <div className='d-flex flex-row'>
        <NavWrapper>
          <SideNav />
        </NavWrapper>
        <OutletWrapper>
          <Switch>
            <Route path='/items'>
              <ItemManager />
            </Route>
            <Route path='/clients'>
              <ClientManager />
            </Route>
            <Route path='/diversities'>
              <DiversityManager />
            </Route>
          </Switch>
        </OutletWrapper>
      </div>
    </Router>
  );
}

export default App;
