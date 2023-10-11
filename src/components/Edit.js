import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Edit() {

	// usestate react hook used to set and get values from the jsx 
	const [name, setname] = useState(''); 
	const [age, setage] = useState(''); 
	const [email, setemail] = useState(''); 
	const [id, setid] = useState(''); 

	// used for navigation with logic in javascript 
	let history = useNavigate() 

	// to get the index (id)
	var index = Employees.map(function (e) {
		return e.id; }).indexOf(id); 

	// handleSubmit to used to take input and update the fields with the new values
	const handleSubmit = (e) => { 

		// to block refreshing the page
		e.preventDefault(); 

		// getting the index of array 
		let a = Employees[index]

		// insert value from the input and update the data
		a.Name = name 
		a.Age = age 
		a.Email = email

		// go back to main page (home Page, denoted by /)
		history('/') 
	} 

	// Useeffect to take care that page will render once only
	useEffect(() => { 
		setname(localStorage.getItem('Name')) 
		setage(localStorage.getItem('Age')) 
		setemail(localStorage.getItem('Email')) 
		setid(localStorage.getItem('id')) 
	}, [])

	return ( 
		<div> 
			<Form className="d-grid gap-2"
				style={{ margin: '15rem' }}>

				{/* setting a name, age, email from input field*/} 
				<Form.Group className="mb-3" controlId="formName"> 
					<Form.Control value={name} onChange={e => setname(e.target.value)} 
						type="text" placeholder="Enter your name" /> 
				</Form.Group> 

				<Form.Group className="mb-3" controlId="formAge"> 
					<Form.Control value={age} onChange={e => setage(e.target.value)} 
						type="text" placeholder="Enter your age" /> 
				</Form.Group> 
				
				<Form.Group className="mb-3" controlId="formEmail"> 
					<Form.Control value={email}	onChange={e => setemail(e.target.value)} 
						type="text" placeholder="Enter your email" /> 
				</Form.Group> 

				{/* the onclick event to submit the input values */} 
				<Button 
					onClick={e => handleSubmit(e)} variant="primary" type="submit" size="lg">Update 
				</Button> 

				{/* back to main page after editing */} 
				<Link className="d-grid gap-2 links" to='/'> 
					<Button variant="warning" size="lg">Home</Button> 
				</Link> 
			</Form> 
		</div> 
	) 
} 

export default Edit 
