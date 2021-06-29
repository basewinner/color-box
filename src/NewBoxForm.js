import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import './NewBoxForm.css';

const NewBoxForm = ({ createBox }) => {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: ""
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const gatherInput = evt => {
    evt.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  };

  return (
    <div className="Box-form">
      <form onSubmit={gatherInput}>
        <div>
          <label htmlFor="height" className="label">Height</label>
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>
        <div>
          <label htmlFor="width" className="label">Width</label>
          <input
            onChange={handleChange}
            type="text"
            name="width"
            id="width"
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor" className="label">Box Color</label>
          <input
            onChange={handleChange}
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
            id="backgroundColor"
          />
        </div>
        <button id="newBoxButton" clas>Add a new box!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
