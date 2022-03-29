import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
import "./NavSection.css"

const NavSection = () => {
    const { user, logOut } = useAuth()
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className='bg-light'>
            <Container className='py-0'>
                <Row className='py-3'>
                    <Col xs={12} md={8} className="nav d-flex jusitfy-content-between align-items-center">
                        <h2 className='fw-bold'><span className='text-danger'>ED</span>TECH</h2>
                        <span className='nav-links d-flex justify-content-center align-items-center ms-auto'>
                            <NavLink activeClassName="selected" to="/home">Home</NavLink>
                            <NavLink activeClassName="selected" to="/courses">Courses</NavLink>
                            <NavLink activeClassName="selected" to="/about">About</NavLink>
                            <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
                            <NavLink activeClassName="selected" to="/dashboard">Dashboard</NavLink>
                        </span>
                    </Col>
                    <Col xs={12} md={4} className="d-flex align-items-center auth justify-content-end">
                        {
                            user.email ?
                                <Link className='reg' onClick={handleLogOut}>LOGOUT</Link> :
                                <span className='d-flex align-items-center'>
                                    <Link className='login' to='/login'>LOGIN</Link>
                                    <Link className='reg' to='/register'>REGISTER</Link>
                                </span>
                        }

                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default NavSection;