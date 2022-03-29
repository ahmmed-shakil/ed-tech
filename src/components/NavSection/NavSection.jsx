import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
import "./NavSection.css"

const NavSection = () => {
    const { user, logOut } = useAuth()
    const [show, setShow] = useState(false)
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className='bg-light'>
            <Container className='py-0'>
                <Row className='py-3'>
                    <Col xs={8} className="nav d-flex jusitfy-content-between align-items-center">
                        <h2 className='fw-bold'><span className='text-danger'>ED</span>TECH</h2>
                        <span className='nav-links d-md-flex d-none justify-content-center align-items-center ms-auto'>
                            <NavLink activeClassName="selected" to="/home">Home</NavLink>
                            <NavLink activeClassName="selected" to="/courses">Courses</NavLink>
                            <NavLink activeClassName="selected" to="/about">About</NavLink>
                            <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
                            <NavLink activeClassName="selected" to="/dashboard">Dashboard</NavLink>
                        </span>
                    </Col>
                    <Col xs={12} md={4} className="d-md-flex d-none align-items-center auth justify-content-end">
                        {
                            user.email ?
                                <>
                                    <Link className='reg' onClick={handleLogOut}>LOGOUT</Link>
                                    <span className='d-md-flex'>
                                        <i class="bi bi-person-circle fs-2 ms-md-3"></i>
                                        <p className='pt-3 ms-1'>{user.displayName ? user.displayName : "Hello"}</p>
                                    </span>
                                </>
                                :
                                <span className='d-flex align-items-center'>
                                    <Link className='login' to='/login'>LOGIN</Link>
                                    <Link className='reg' to='/register'>REGISTER</Link>
                                </span>
                        }

                    </Col>
                    <Col xs={4} onClick={() => setShow(true)} className="dot-bar d-flex d-md-none flex-column align-items-end justify-content-center">
                        <div className='bar bar-1'></div>
                        <div className='bar bar-2'></div>
                        <div className='bar bar-3'></div>
                    </Col>
                </Row>
                <div className='toggle-nav' style={{ right: show ? "0" : "-300px", height: "100vh", width: "300px", backgroundColor: "white" }}>
                    <div className='text-end p-3' onClick={() => setShow(false)}><i className="bi bi-x-lg text-dark fs-3 fw-bold"></i></div>

                    <div className='nav-links flex-column my-5 d-flex justify-content-center align-items-center ms-auto'>
                        <NavLink activeClassName="selected" to="/home">Home</NavLink>
                        <NavLink activeClassName="selected" to="/courses">Courses</NavLink>
                        <NavLink activeClassName="selected" to="/about">About</NavLink>
                        <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
                        <NavLink activeClassName="selected" to="/dashboard">Dashboard</NavLink>
                        {
                            user.email ?
                                <span>
                                    <Link className='reg mt-3' onClick={handleLogOut}>Logout</Link>
                                    <i class="bi bi-person-circle fs-2 ms-md-3"></i>
                                    <p className='pt-md-3 ms-1'>{user.displayName ? user.displayName : "Hello"}</p>
                                </span>
                                :
                                <span>
                                    <Link className='text-danger fw-bold' to='/login'>Log in</Link>
                                    <Link className='reg mt-2' to='/register'>Register</Link>
                                </span>
                        }
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default NavSection;