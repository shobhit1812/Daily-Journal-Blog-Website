import React, { useEffect, useState } from "react"
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap"
import { ThreeDots } from "react-loader-spinner"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import FormContainer from "./formContainer"
import Message from "../Message"
import { register } from "../../store/actions/userAction"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  const [msg, setMsg] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userRegister = useSelector((state) => state.userRegister)

  const { loading, error, userInfo } = userRegister

  const registerHandler = (e) => {
    e.preventDefault()
    if (confirmPassword === password) {
      dispatch(register(name, email, password))
    } else {
      setMsg("Passwords does not match")
    }
  }
  useEffect(() => {
    if (userInfo) {
      navigate("/home")
    }
  }, [navigate, userInfo])

  return (
    <FormContainer>
      <h1>Publish your passions your way.</h1>
      <h2 style={{ textDecoration: "underline" }}>Signup</h2>
      {loading && <ThreeDots color='#EDDFB3' height={80} width={80} />}
      {error && <Message variant='danger' message={error} />}
      {loading && <ThreeDots color='#EDDFB3' height={80} width={80} />}
      {error && <Message variant='danger' message={error} />}
      {msg && <Message variant='danger' message={msg} />}
      <Form onSubmit={registerHandler}>
        <FormGroup controlId='username' className='mb-3'>
          <FormLabel>Username</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter your Name'
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId='email' className='mb-3'>
          <FormLabel>Email Address</FormLabel>
          <FormControl
            type='email'
            placeholder='Enter your Email Address'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId='password' className='mb-3'>
          <FormLabel>Password</FormLabel>
          <FormControl
            type='password'
            placeholder='Enter your Password'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId='password2' className='mb-3'>
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            type='password'
            placeholder='Enter Confirm Password'
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup>

        <Button type='submit' variant='primary' className='mt-3'>
          Signup
        </Button>

        <Row className='py-3'>
          <Col>
            Already have an account? <Link to='/'>Login</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default Register
