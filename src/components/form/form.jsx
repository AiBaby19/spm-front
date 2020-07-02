import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  width: 1000px;
`;

const InputText = styled.input`
  border: none;
  margin-right: 40px;
  border-bottom: 1px solid lightgrey;
`;

const CheckBox = styled.input`
  margin-right: 5px;
`;

function Form({ values, submitValues }) {
  const [name, setName] = useState(values?.name);
  const [catalogNum, setCatalogNum] = useState(values?.catalogNum);
  const [price, setPrice] = useState(values?.price);
  const [hasVat, setHasVat] = useState(values?.hasVat || false);
  const [enable, setEnable] = useState(values?.enable || false);

  useEffect(() => {
    setName(values?.name);
    setCatalogNum(values?.catalogNum);
    setPrice(values?.price);
    setHasVat(values?.hasVat);
    setEnable(values?.enable);
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitValues({ name, catalogNum, price, hasVat, enable });
  };

  const clearForm = () => {
    // setName
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputText
        type='text'
        value={values?.name}
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
      />
      <InputText
        type='text'
        value={values?.serial}
        placeholder='Catalog No.'
        onChange={(e) => setCatalogNum(e.target.value)}
      />
      <InputText
        type='number'
        value={values?.price}
        placeholder='Price'
        onChange={(e) => setPrice(e.target.value)}
      />
      <div className='pt-2 mr-5'>
        <CheckBox
          value={values?.vat}
          checked={values?.vat}
          className='form-check-input'
          type='checkbox'
          id='defaultCheck1'
          onClick={() => setHasVat(!hasVat)}
        />
        <label className='form-check-label' htmlFor='defaultCheck1'>
          Has Vat
        </label>
      </div>

      <div className='pt-2 mr-5'>
        <CheckBox
          checked={values?.enable}
          value={values?.enable}
          className='form-check-input'
          type='checkbox'
          id='defaultCheck1'
          onClick={() => setEnable(!enable)}
        />
        <label className='form-check-label' htmlFor='defaultCheck1'>
          Enabled
        </label>
      </div>
      <button className='btn btn-primary' type='submit' value='Submit'>
        {values ? 'Update': 'Add'}
      </button>
    </FormWrapper>
  );
}

export default Form;
