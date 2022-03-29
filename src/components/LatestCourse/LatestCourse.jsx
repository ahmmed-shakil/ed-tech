import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LatestCourse = () => {
    return (
        <div className='pt-5 my-5 text-start'>
            <h1 className='text-center'>CSE Fundamentals With ED-TECH</h1>
            <Container className='pt-5'>
                <Row>
                    <Col lg={6} sm={12}>
                        <img src="https://blog-digital.aakash.ac.in/wp-content/uploads/2019/07/Blog-Post_750x375-01.jpg" alt="latest-course" className='img-fluid' />
                    </Col>
                    <Col lg={6} sm={12}>
                        <h2 className='mb-4'>Important Dates For Next Batch</h2>
                        <h3><b>Enrollment Starts:</b> Within 6 months or 1 year</h3>
                        <h3><b>Enrollment Ends:</b> Within 2 weeks after starting</h3>
                        <h3><b>Batch Orientation:</b> Within 5 days after enrollment finished</h3>
                        <h3><b>Class Start:</b> Within 7 days after enrollment</h3>
                        <h2 className='mt-3 fw-bolder'>$180</h2>
                    </Col>
                </Row>
                <Link to="/courses"><Button className='enroll-btn d-block mx-auto my-5 w-50 mx-auto py-2'>Enroll Now</Button></Link>
            </Container>
        </div>
    );
};

export default LatestCourse;