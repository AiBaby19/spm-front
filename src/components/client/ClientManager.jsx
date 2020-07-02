import React, { useState, useEffect } from 'react';
import Form from '../form/form';
import Table from '../table/Table';

function ClientManager() {
  const [clients, setClients] = useState();
  const someValues = {};
  // const clientColumns = ['name', 'catalog-num', 'price', 'has-vat', 'enable']

  useEffect(() => {
    async function fetchClients() {
      let response = await fetch(`http://localhost:8000/api/clients`);
      const data = await response.json();
      setClients(data);
    }
    fetchClients();
  }, []);

  const submitValues = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Client Manager</h1>
      <Form values={someValues} submitValues={submitValues}></Form>
      <div className='mt-5'>
        <Table data={clients}></Table>
      </div>
    </div>
  );
}

export default ClientManager;
