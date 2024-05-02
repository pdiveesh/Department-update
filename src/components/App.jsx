import React, { useState } from 'react';
import './App.css';
import MyForm from './Form';
import AddDepartment from './AddDepartment';
import NotificationContent from './NotificationContent';

function App() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonText) => {
    setSelectedButton(buttonText);
  };

  const renderContent = () => {
    switch (selectedButton) {
      case 'Add/View a user':
        return <MyForm></MyForm>;
      case 'Send a Notification':
        return <NotificationContent />;
      case 'User Payment section':
        return <div>User Payment section content</div>;
      case 'Call back Requests':
        return <div>Call back Requests content</div>;
      case 'Add Departments':
        return <AddDepartment/>;
      case 'Add Schemes/Data':
        return <div>Add Schemes/Data content</div>;
      case 'Provide User Access':
        return <div>Provide User Access content</div>;
      case 'Complaints Section':
        return <div>Complaints Section content</div>;
      case 'Logout':
        return <div>Logout content</div>;
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <div className="container">
      <div className="side">
        <ul>
          <button onClick={() => handleButtonClick("Add/View a user")}>
            <li>Add/View a user</li>
          </button>
          <button onClick={() => handleButtonClick("Send a Notification")}>
            <li>Send a Notification</li>
          </button>
          <button onClick={() => handleButtonClick("User Payment section")}>
            <li>User Payment section</li>
          </button>
          <button onClick={() => handleButtonClick("Call back Requests")}>
            <li>Call back Requests</li>
          </button>
          <button onClick={() => handleButtonClick("Add Departments")}>
            <li>Add Departments</li>
          </button>
          <button onClick={() => handleButtonClick("Add Schemes/Data")}>
            <li>Add Schemes/Data</li>
          </button>
          <button onClick={() => handleButtonClick("Provide User Access")}>
            <li>Provide User Access</li>
          </button>
          <button onClick={() => handleButtonClick("Complaints Section")}>
            <li>Complaints Section</li>
          </button>
          <button onClick={() => handleButtonClick("Logout")}>
            <li>Logout</li>
          </button>
        </ul>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;