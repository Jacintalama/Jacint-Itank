// CheckboxComponent.jsx
import React, { useState } from 'react';

const CheckboxComponent = ({ id, label }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={isChecked}
        id={id}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default CheckboxComponent;
