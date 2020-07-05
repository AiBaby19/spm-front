import React from 'react';
import MultiSelect from 'react-multi-select-component';

function DiversitySelector({ diversities, diversity, setDiversity }) {

  return (
    <div>
      <MultiSelect
        options={diversities}
        value={diversity}
        onChange={setDiversity}
        labelledBy={'Select'}
      />
    </div>
  );
}

export default DiversitySelector;
