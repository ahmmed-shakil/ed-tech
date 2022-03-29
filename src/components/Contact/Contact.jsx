import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useCourses from '../../hooks/useCourses';
import Announcement from '../Announcement/Announcement';
import Footer from '../Footer/Footer';
import NavSection from '../NavSection/NavSection';

const Contact = () => {

    const { user } = useAuth();
    const [courses] = useCourses([])

    return (
        <div className='text-start fw-bold contact'>
            <NavSection />
            <Announcement />
            <Container className='my-5 py-5'>
                <div className='w-75 mx-auto'>
                    <h2 className='fw-bold text-center my-3'>Contact Us</h2>
                    <Row className='shadow-lg align-items-center text-start'>
                        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center flex-column text-start">
                            <h1><span className='text-danger'>ED</span>TECH</h1>
                            <p className='lead'>Learn app development online from the world's leading universities on ED-TECH!</p>
                            <Form className='w-100'>
                                <Form.Group>
                                    <Form.Label />
                                    <Form.Control type="email" defaultValue={user?.email} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label />
                                    <Form.Control type="text" defaultValue={user.name ? user.name : 'Enter your name'} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label />
                                    <Form.Control as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }} />
                                </Form.Group>
                                <Button className='enroll-btn w-100 my-3'>SUBMIT</Button>
                            </Form>

                        </Col>
                        <Col xs={12} md={6} className='ps-3'>

                            <h3 className='py-4'>OUR COURSES</h3>
                            {
                                courses?.map(course => <p className='text-start'>{course.id}.{course.title}</p>)
                            }
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default Contact;