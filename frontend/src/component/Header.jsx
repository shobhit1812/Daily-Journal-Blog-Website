import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { HiHome } from "react-icons/hi"

import { BsFillInfoCircleFill, BsShieldLock } from "react-icons/bs"
import { logout } from "../store/actions/userAction"

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const handleLogout = () => {
    try {
      dispatch(logout())
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='light' variant='dark'>
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/home")}
            style={{ textDecoration: "underline" }}
          >
            Daily Journal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav
              className='me-auto'
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Nav.Link
                onClick={() => navigate("/home")}
                className='icon'
                style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
              >
                <HiHome />
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate("/about")}
                className='icon'
                style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
              >
                <BsFillInfoCircleFill />
                About
              </Nav.Link>
            </Nav>
            <Nav className='align-items-center'>
              <NavDropdown
                title={userInfo.name}
                style={{ textDecoration: "underline" }}
              >
                <NavDropdown.Item>
                  <Nav.Link
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                    onClick={handleLogout}
                  >
                    <BsShieldLock />
                    Logout
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
