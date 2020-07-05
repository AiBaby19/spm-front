import React, { useState, useEffect } from 'react';
import ClientForm from '../form/ClientForm';
import Table from '../table/Table';

function ClientManager({
  diversities,
  clientList,
  deleteItem,
  submitItem,
  submitEditItem,
}) {
  const [clients, setClients] = useState(clientList);
  const [clientEdit, setClientEdit] = useState();
  useEffect(() => {
    setClients(clientList);
  }, [clientList]);

  useEffect(() => {
    setClientEdit(clientEdit);
  }, [clientEdit]);

  const itemDelete = (id) => {
    deleteItem('clients', id);
  };

  const itemSubmit = (client) => {
    submitItem('clients', client);
  };

  const itemEditSubmit = (client) => {
    submitEditItem('clients', client);
  };

  return (
    <div>
      <h1>Client Manager</h1>
      <ClientForm
        client={clientEdit}
        submitItem={itemSubmit}
        submitEditItem={itemEditSubmit}
        diversities={diversities}></ClientForm>
      <div className='mt-5'>
        <Table
          data={clients}
          editItem={(values) => setClientEdit(values)}
          deleteItem={itemDelete}></Table>
      </div>
    </div>
  );
}

export default ClientManager;
