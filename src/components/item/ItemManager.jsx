import React, { useState, useEffect } from 'react';
import Form from '../form/form';
import Table from '../table/Table';

function ItemManager() {
  const [items, setItems] = useState();
  const [itemEdit, setItemEdit] = useState();

  useEffect(() => {
    async function fetchItems() {
      let response = await fetch(`http://localhost:8000/api/items`);
      const data = await response.json();

      setItems(data.data);
    }
    fetchItems();
  }, []);

  const submitItem = async (item) => {
    let response = await fetch(`http://localhost:8000/api/items`, {
      method: 'post',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setItems(data.data);
  };

  const deleteItem = async (id) => {
    let response = await fetch(`http://localhost:8000/api/items/${id}`, {
      method: 'delete',
    });
    const data = await response.json();
    setItems(data.data);
  };

  const submitEditItem = async (values) => {
    console.log(values)
    let response = await fetch(`http://localhost:8000/api/items/${itemEdit.id}`, {
      method: 'put',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setItems(data.data);
  };

  const editItem = (values) => {
    setItemEdit(values);
  };

  return (
    <div>
      <h1>Item Manager</h1>
      <Form
        item={itemEdit}
        submitValues={submitItem}
        submitEditValues={submitEditItem}></Form>
      <div className='mt-5'>
        <Table data={items} editItem={editItem} deleteItem={deleteItem}></Table>
      </div>
    </div>
  );
}

export default ItemManager;
