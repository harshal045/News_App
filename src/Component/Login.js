import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { Register } from './Register';

export const Login = (props) => {
  const [show, setShow] = useState(false);
  const handleClose=()=> setShow(false)
  const handleShow = () => setShow(true);

  const [user,setUser]=useState({
    email:"",
    password:""
  })
  const handleChange=(e)=>
  {
    const {name,value}=e.target
    setUser({
        ...user,[name]:value
    })
  }

  const handleLogin=()=>
  {
    axios.post("http://localhost:9002/login",user)
    .then(res => {
      alert(res.data.message)
      console.log(res.data.name)
      props.handleNme(res.data.name);
    })
  }

  return (
    <div>
<Button style={{marginLeft:500}} variant="primary" onClick={handleShow}>
        Log in 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form> 
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
      <Button variant="primary" onClick={()=>{handleLogin();handleClose();}} >
        Submit
      </Button>
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Register/>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
