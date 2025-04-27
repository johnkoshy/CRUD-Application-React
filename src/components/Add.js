import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Add() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now(); // Simple unique ID (use UUID in production)
    const newEmployee = { id, Name: name, Age: parseInt(age), Email: email };

    // Get existing employees from localStorage
    const savedEmployees = JSON.parse(localStorage.getItem('employees') || '[]');
    // Add new employee
    const updatedEmployees = [...savedEmployees, newEmployee];
    // Save to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Clear form
    setName('');
    setAge('');
    setEmail('');

    // Redirect to Home
    navigate('/');
  };

  return (
    <div className="container glossy-container">
      <h4>Add New User</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <Button type="submit" className="btn-add-user glossy-button">
          Add User
        </Button>
      </Form>
    </div>
  );
}

export default Add;