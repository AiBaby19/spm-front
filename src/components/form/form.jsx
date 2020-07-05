import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DiversitySelector from '../diversity/DiversitySelector';

const FormWrapper = styled.form`
  display: flex;
  width: auto;
`;

const InputText = styled.input`
  border: none;
  margin-right: 40px;
  border-bottom: 1px solid lightgrey;
`;

const CheckBox = styled.input`
  margin-right: 5px;
`;

function Form({ diversities, item, submitValues, submitEditValues }) {
  const [name, setName] = useState('');
  const [catalogNum, setCatalogNum] = useState('');
  const [price, setPrice] = useState('');
  const [hasVat, setHasVat] = useState(false);
  const [enable, setEnable] = useState(false);
  const [diversity, setDiversity] = useState('');

  useEffect(() => {
    setName(item?.name || '');
    setCatalogNum(item?.serial || '');
    setPrice(item?.price || '');
    setHasVat(item?.vat || false);
    setEnable(item?.enable || false);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { name, catalogNum, price, hasVat, enable, diversity };
    item ? submitEditValues(values) : submitValues(values);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputText
        type='text'
        value={name}
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
      />
      <InputText
        type='text'
        value={catalogNum}
        placeholder='Catalog No.'
        onChange={(e) => setCatalogNum(e.target.value)}
      />
      <InputText
        type='number'
        value={price}
        placeholder='Price'
        onChange={(e) => setPrice(e.target.value)}
      />
      <div className='pt-2 mr-5'>
        <CheckBox
          checked={hasVat}
          value={hasVat}
          className='form-check-input'
          type='checkbox'
          id='defaultCheck1'
          onClick={() => setHasVat(!hasVat)}
        />
        <label className='form-check-label' htmlFor='defaultCheck1'>
          Has Vat
        </label>
      </div>

      <div className='pt-2 mr-4'>
        <CheckBox
          checked={enable}
          value={enable}
          className='form-check-input'
          type='checkbox'
          id='defaultCheck1'
          onClick={() => setEnable(!enable)}
        />
        <label className='form-check-label' htmlFor='defaultCheck1'>
          Enabled
        </label>
      </div>

      <div className='d-flex mr-2'>
        {diversities && (
          <DiversitySelector
            diversities={diversities}
            diversity={diversity}
            setDiversity={setDiversity}
          />
        )}
      </div>
      <button className='btn btn-primary' type='submit' value='Submit'>
        {item ? 'Update' : 'Add'}
      </button>
    </FormWrapper>
  );
}

export default Form;
