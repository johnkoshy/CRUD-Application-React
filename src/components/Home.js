import React from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom'; 

function Home() { 

	let history = useNavigate() 

	function setID(id, name, age, email) { 
		localStorage.setItem('id', id); 
		localStorage.setItem('Name', name); 
		localStorage.setItem('Age', age); 
		localStorage.setItem('Email', email); 
	} 

	// function for deleting the entry 
	function deleted(id) { 

		var index = Employees.map(function (e) {
			return e.id; }).indexOf(id); 

		// deleting the entry with index 
		Employees.splice(index, 1)

		// refreshing the page
		history('/') 
	} 

	return ( 
		<div style={{ margin: '10rem' }}> 
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

					{/* looping through every element and we display each item in a table */} 
					{Employees.map((item) => {
						return ( 
							<tr> 
								<td>{item.Name}</td> 
								<td>{item.Age}</td> 
								<td>{item.Email}</td>

								{/* getting id, name, age and store in jsx with onclick event */} 
								<td><Link to={`/edit`}> 
									<Button onClick={(e) => setID(item.id, item.Name, item.Age, item.Email)} 
									variant="secondary"> Update</Button>
									</Link> 
								</td> 

								{/* deleted function to delete the entries by passing the id as parameter */} 
								<td><Button onClick={e => deleted(item.id)} 
									variant="danger">Delete</Button></td> 
							</tr> 
						) 
					})} 
				</tbody> 
			</Table> 

			{/* create button to enter new user details */} 
			<Link className="d-grid gap-2 links" to='/add'>
				<Button variant="warning" size="lg">Add a new user</Button>
			</Link>
			<br></br>
			&#169;2023 Copyright
		</div> 
	) 
} 

export default Home 
