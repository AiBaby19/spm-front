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

function DiversityForm({ client, submitValues, submitEditValues, diversities }) {
  const [name, setName] = useState('');
  const [enable, setEnable] = useState(false);
  const [diversity, setDiversity] = useState('');

  useEffect(() => {
    setName(client?.name || '');
    setEnable(client?.enable || false);
    setDiversity(client?.diversity || '');
  }, [client]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { name, enable, diversity };
    client ? submitEditValues(values) : submitValues(values);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputText
        type='text'
        value={name}
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
      />

      <div className='pt-2 mr-4 d-flex'>
        <CheckBox
          checked={enable}
          value={enable}
          className='form-check-input'
          type='checkbox'
          id='defaultCheck'
          onClick={() => setEnable(!enable)}
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
          {diversity ? 'Update' : 'Add'}
        </button>
      </div>
    </FormWrapper>
  );
}

export default DiversityForm;
