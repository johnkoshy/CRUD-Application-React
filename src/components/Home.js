import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees
      ? JSON.parse(savedEmployees)
      : [
          { id: 1, Name: 'John Doe', Age: 30, Email: 'john@example.com' },
          { id: 2, Name: 'Jane Smith', Age: 25, Email: 'jane@example.com' },
        ];
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  function setID(id, name, age, email) {
    localStorage.setItem('id', id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Email', email);
  }

  function deleted(id) {
    setEmployees(employees.filter((e) => e.id !== id));
  }

  return (
    <div className="container glossy-container">
      <h4>User Management Dashboard</h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="header-name">Name</th>
            <th className="header-age">Age</th>
            <th className="header-email">Email</th>
            <th className="header-edit">Edit</th>
            <th className="header-remove">Remove</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((item) => (
            <tr key={item.id}>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.Email}</td>
              <td>
                <Link to={`/edit`}>
                  <Button
                    onClick={() => setID(item.id, item.Name, item.Age, item.Email)}
                    variant="secondary"
                    className="glossy-button"
                  >
                    Edit
                  </Button>
                </Link>
              </td>
              <td>
                <Button
                  onClick={() => deleted(item.id)}
                  variant="danger"
                  className="glossy-button"
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="add-button-container">
        <Link to="/add">
          <Button className="btn-add-user glossy-button" size="lg">
            Add a New User
          </Button>
        </Link>
      </div>
      <div className="footer">© 2023 Copyright</div>
    </div>
  );
}

export default Home;