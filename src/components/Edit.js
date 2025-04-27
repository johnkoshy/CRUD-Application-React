import React, { useState, useRef, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Edit() {
  const [name, setName] = useState(localStorage.getItem('Name') || '');
  const [age, setAge] = useState(localStorage.getItem('Age') || '');
  const [email, setEmail] = useState(localStorage.getItem('Email') || '');
  const id = localStorage.getItem('id');
  const navigate = useNavigate();
  const nameInputRef = useRef(null);

  // Focus the name input on mount to ensure cursor control
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = { id: parseInt(id), Name: name, Age: parseInt(age), Email: email };

    const savedEmployees = JSON.parse(localStorage.getItem('employees') || '[]');
    const updatedEmployees = savedEmployees.map((emp) =>
      emp.id === parseInt(id) ? updatedEmployee : emp
    );
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    localStorage.removeItem('id');
    localStorage.removeItem('Name');
    localStorage.removeItem('Age');
    localStorage.removeItem('Email');

    navigate('/');
  };

  return (
    <div className="container glossy-container">
      <h4>Edit User</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={handleNameChange}
            ref={nameInputRef}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" className="glossy-button" variant="primary">
          Save Changes
        </Button>
      </Form>
    </div>
  );
}

export default Edit;