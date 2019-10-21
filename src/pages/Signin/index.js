import React, { useState } from 'react'
import { useStoreState, useStoreDispatch } from 'easy-peasy'
import { Form, Button, Col, Row, Alert } from 'react-bootstrap'
import Layout from '../../common/components/Layout'

function Signin(props) {
  const dispatch = useStoreDispatch()
  const { Signin: stateSignin } = useStoreState(
    globalState => globalState,
  )
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch.Signin.postSignin({ email, password })
  }

  return (
    <React.Fragment>
      <Layout>
        <Row style={{ marginTop: '10px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            {
              stateSignin.initialState &&
              stateSignin.initialState.items &&
              stateSignin.initialState.items.status === '200' && (
                <Alert variant="primary">Login Success</Alert>
              )
            }
            <Form onSubmit={handleSubmit} method="POST">
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
              <Form.Group>
                <Button type="submit" block>
                  Sign in
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Layout>
    </React.Fragment>
  )
}

export default Signin
