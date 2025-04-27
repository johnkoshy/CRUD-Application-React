import React from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  let history = useNavigate();

  function setID(id, name, age, email) {
    localStorage.setItem('id', id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Email', email);
  }

  function deleted(id) {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);
    Employees.splice(index, 1);
    history('/');
  }

  return (
    <div className="container">
      <h4>User Management Dashboard</h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Employees.map((item) => (
            <tr key={item.id}>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.Email}</td>
              <td>
                <Link to={`/edit`}>
                  <Button
                    onClick={(e) => setID(item.id, item.Name, item.Age, item.Email)}
                    variant="secondary"
                  >
                    Update
                  </Button>
                </Link>
              </td>
              <td>
                <Button onClick={() => deleted(item.id)} variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link className="d-grid gap-2" to="/add">
        <Button variant="warning" size="lg">
          Add a New User
        </Button>
      </Link>
      <div className="footer">© 2023 Copyright</div>
    </div>
  );
}

export default Home;