import React, {useEffect, useState} from 'react';
import DiversityForm from '../form/DiversityForm';
import Table from '../table/Table';

function DiversityManager(diversitiesList) {
  const [diversities, setDiversities] = useState();
  const [diversityEdit, setDiversityEdit] = useState();

  useEffect(() => {
    async function fetchDiversities() {
      let response = await fetch(`http://localhost:8000/api/diversities`);
      const data = await response.json();
      setDiversities(data.data);
    
    }
    fetchDiversities();
  }, []);

  const submitItem = async (diversity) => {
    let response = await fetch(`http://localhost:8000/api/diversities`, {
      method: 'post',
      body: JSON.stringify(diversity),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setDiversities(data.data);
  };

  const deleteItem = async (id) => {
    let response = await fetch(`http://localhost:8000/api/diverity/${id}`, {
      method: 'delete',
    });
    const data = await response.json();
    setDiversities(data.data);
  };

  const submitEditItem = async (values) => {
    let response = await fetch(`http://localhost:8000/api/diverity/${diversityEdit.id}`, {
      method: 'put',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setDiversities(data.data);
  };

  const editItem = (values) => {
    setDiversityEdit(values);
  };
  return (
    <div>
      <h1>Diversity Manager</h1>
      <DiversityForm
        diversity={diversityEdit}
        submitValues={submitItem}
        submitEditValues={submitEditItem}
        diversities={diversitiesList}
        ></DiversityForm>
      <div className='mt-5'>
        <Table data={diversities} editItem={editItem} deleteItem={deleteItem}></Table>
      </div>
    </div>
  );
}

export default DiversityManager;
