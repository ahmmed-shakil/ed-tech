import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CourseProcess = () => {
    return (
        <div className='bg-process py-5'>
            <h1 className='mb-5'>Course Process Overview</h1>
            <Container className='text-start d-flex align-items-center'>
                <Row>
                    <Col lg={6} md={12}>
                        <img src="https://leverageedu.com/blog/wp-content/uploads/2019/07/Resume-in-Computer-Science-01.png" alt="course-process" className='img-fluid' />
                    </Col>
                    <Col lg={6} md={12}>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h1 className='text-info d-inline p-4 fw-bolder' style={{ fontSize: "60px" }}>1.</h1>
                            <h4>The class video will be uploaded on daily 10:00 PM local. Your task will be to finish these videos within next 24 hours. There will be aroun 1 to 1.5 hours of videos.</h4>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h1 className='text-info d-inline p-4 fw-bolder' style={{ fontSize: "60px" }}>2.</h1>
                            <h4>You can ask as many questions as you ask if you get lost in anywhere. Join our <span className='text-danger'>support sessions</span> if needed. Take help with sharing your screen.</h4>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h1 className='text-info d-inline p-4 fw-bolder' style={{ fontSize: "60px" }}>3.</h1>
                            <h4>Keep the mentality of giving daily 6-8 hours. This time could be 4-5 hours for some. But come here with the plan fo working hard and not searching for shortcuts.</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseProcess;