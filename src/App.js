import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchList } from './helpers/fetchLists';
import { getURL } from './helpers/urls';
import { itemDelete, itemSubmit, itemEditSubmit } from './helpers/helper';

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
  const [diversities, setDiversities] = useState('');
  const [clients, setClients] = useState();
  const [items, setItems] = useState();

  useEffect(() => {
    fetchClients();
    fetchItems();
    fetchDiversities();
  }, []);

  const fetchClients = async () => {
    const clients = await fetchList(getURL('clients'));
    setClients(clients);
  };

  const fetchItems = async () => {
    const items = await fetchList(getURL('items'));
    setItems(items);
  };

  const fetchDiversities = async () => {
    const diversities = await fetchList(getURL('diversities'));
    setDiversities(diversities);
  };

  const deleteItem = async (type, id) => {
    await itemDelete(getURL(type), id);
    fetchClients();
  };

  const submitItem = async (type, item) => {
    await itemSubmit(getURL(type), item);
    fetchClients();
  };

  const submitEditItem = async (type, item) => {
    await itemEditSubmit(getURL(type), item.id, item);
    fetchClients();
  };

  return (
    <Router>
      <div className='d-flex flex-row'>
        <NavWrapper>
          <SideNav />
        </NavWrapper>
        <OutletWrapper>
          <Switch>
            <Route path='/items'>
              {items && (
                <ItemManager diversities={diversities} itemList={items} />
              )}
            </Route>
            <Route path='/clients'>
              {clients && (
                <ClientManager
                  diversities={diversities}
                  clientList={clients}
                  fetchClients={fetchClients}
                  deleteItem={deleteItem}
                  submitItem={submitItem}
                  submitEditItem={submitEditItem}
                />
              )}
            </Route>
            <Route path='/diversities'>
              {diversities && <DiversityManager diversities={diversities} />}
            </Route>
          </Switch>
        </OutletWrapper>
      </div>
    </Router>
  );
}

export default App;
