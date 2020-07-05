import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import DiversitySelector from '../diversity/DiversitySelector';

const FormWrapper = styled.form`
  display: flex;
  width: 1200px;
`;

const InputText = styled.input`
  border: none;
  margin-right: 40px;
  border-bottom: 1px solid lightgrey;
`;

const CheckBox = styled.input`
  margin-right: 5px;
`;

function ClientForm({ client, submitItem, submitEditItem, diversities }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [enable, setEnable] = useState(false);
  const [diversity, setDiversity] = useState('');

  useEffect(() => {
    setName(client?.name || '');
    setType(client?.type || '');
    setEnable(client?.enable || false);
    setDiversity(client?.diversity || '');
  }, [client]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!diversity) return;
    const values = { name, type, enable, diversity, id: client?.id };
    client ? submitEditItem(values) : submitItem(values);
  };

  const resetForm = () => {
    client = '';
    setName('');
    setType('');
    setEnable(false);
    setDiversity('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputText
        required
        type='text'
        value={name}
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
      />

      <div className='pt-2 d-flex'>
        <label className='mr-2' htmlFor='select'>
          Type
        </label>
        <select
          required
          onChange={(e) => setType(e.target.value)}
          value={type}
          className='mr-5'
          id='select'>
          <option value='restaurant'>Restaurant</option>
          <option value='coffee'>Coffee</option>
          <option value='bar'>Bar</option>
        </select>
      </div>
      <div className='pt-2 mr-4 d-flex'>
        <CheckBox
          checked={enable}
          value={enable}
          className='form-check-input'
          type='checkbox'
          id='defaultCheck'
          onClick={() => setEnable(!enable)}
          onChange={() => {}}
        />
        <label className='form-check-label' htmlFor='defaultCheck'>
          Enabled
        </label>
      </div>

      <div className='d-flex'>
        {diversities && (
          <DiversitySelector
            diversities={diversities}
            diversity={diversity}
            setDiversity={setDiversity}
          />
        )}
      </div>
      <div>
        <button className='btn btn-primary ml-4' type='submit' value='Submit'>
          {client ? 'Update' : 'Add'}
        </button>
      </div>
      <div>
        <button
          className='btn btn-danger ml-4'
          type='button'
          onClick={resetForm}>
          Reset Form
        </button>
      </div>
    </FormWrapper>
  );
}

export default ClientForm;
