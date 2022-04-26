import React from 'react';
import AvailableOption from './AvailableOption.jsx'; // container  component
import SelectedOption from './SelectedOption.jsx'; // container  component

const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOption title="Available Options" />
      <SelectedOption title="Selected Options" />
    </div>
  );
};

export default TransferList;
