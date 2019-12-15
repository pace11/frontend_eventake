import React, { useState } from 'react'
// import { useStoreState, useStoreDispatch } from 'easy-peasy'
import { Form, Button, Col, Row, Card } from 'react-bootstrap'
import Layout from '../../common/components/Layout'

function Signin(props) {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [dateOfBirth, setDateOfBirth] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [address, setAddress] = useState()
  const [gender, setGender] = useState()
  const [phone, setPhone] = useState()
  

  const handleSubmit = e => {
    e.preventDefault()
    console.log('first name: ',firstName)
    console.log('last name: ',lastName)
    console.log('date of birth: ',dateOfBirth)
    console.log('email: ',email)
    console.log('password: ',password)
    console.log('address: ',address)
    console.log('gender: ',gender)
    console.log('phone: ',phone)
  }

  return (
    <React.Fragment>
      <Layout>
        <Row style={{ marginTop: '10px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Header className="text-center">
                Sign up
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit} method="POST">
                  <Form.Group controlId="formGroupFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      onChange={e => setFirstName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      onChange={e => setLastName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupDateOfBirth">
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Enter date of birth"
                      onChange={e => setDateOfBirth(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={e => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Enter Address"
                      onChange={e => setAddress(e.target.value)}
                      row="3"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" onChange={e => setGender(e.target.value)} required>
                      <option style={{display:'none'}}>-- choose one --</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formGroupPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control 
                      type="number" 
                      onChange={e => setPhone(e.target.value)} 
                      required 
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button type="submit" block>
                      Sign in
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Layout>
    </React.Fragment>
  )
}

export default Signin
