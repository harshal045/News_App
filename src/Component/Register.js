import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import {useNavigate} from 'react-router-dom'


export const Register = () => {
  const navigate=useNavigate()
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user,setUser]=useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange=(e)=>
  {
    const {name,value}=e.target
    setUser({
      ...user,
      [name]:value
    })
  }

  const handleRegister=()=>
  {
    const {name,email,password}=user
    if(name && email && password)
    {
        axios.post("http://localhost:9002/register",user)
        .then(res => {
          console.log(res)
        })
    }
    else
    {
        alert("invalid input")
    }
  }

  return (
    
    <div>
      <Button variant="primary" onClick={handleShow}>
   New user Sign in!
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Sign up</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form >

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Name</Form.Label>
        <Form.Control onChange={handleChange} name="name" value={user.name} type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control onChange={handleChange} name="email" value={user.email} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control onChange={handleChange} name="password" value={user.password} type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary"  onClick={()=>{handleRegister();handleClose();}} >
        Submit
      </Button>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}
