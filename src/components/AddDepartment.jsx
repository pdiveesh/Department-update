import React, { useState } from 'react';
import './DepartmentDropdown.css'; 
import axios  from 'axios';
const DepartmentDropdown = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [newDepartmentName, setNewDepartmentName] = useState('');
  const options = [
    { value: 'Paper1', label: 'Paper 1' },
    { value: 'Paper2', label: 'Paper 2' },
    { value: 'Paper3', label: 'Paper 3' },
    { value: 'Paper4', label: 'Paper 4' }
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option); console.log(selectedOption);
   
  };

  const handleInputChange = (e) => {
    setNewDepartmentName(e.target.value);
  };

  const handleAddDepartment = () => {
    if (newDepartmentName.trim() !== '') {
      const result = axios.post("http://localhost:8080/add_department", { paper: selectedOption, departmentName: newDepartmentName });

    console.log(result);

      setSelectedOption(null); 
      setNewDepartmentName(''); 
    }
    else{
      console.log("department name cant be empty")
    }

  };

  return (
    <div className="dropdown-container">
      <label className="dropdown-label" htmlFor="department">Select Paper:</label>
      <select 
        id="Paper" 
        className="dropdown"
        value={selectedOption || ''}
        onChange={(e) => handleOptionSelect(e.target.value)}
      >
        <option value="">Select</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="input-container">
        <input 
          type="text" 
          value={newDepartmentName} 
          onChange={handleInputChange} 
          placeholder="Enter new department name" 
          disabled={!selectedOption} 
        />
        <button 
          onClick={handleAddDepartment} 
          disabled={!selectedOption }
        >
          Add Department
        </button>
      </div>
    </div>
  );
};

export default DepartmentDropdown;
