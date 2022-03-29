
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useCourses from "../../hooks/useCourses"
import Announcement from '../Announcement/Announcement';
import Footer from '../Footer/Footer';
import NavSection from '../NavSection/NavSection';

const Details = () => {
    const { id } = useParams();
    console.log(id);
    const [courses] = useCourses();
    console.log(courses);
    const selectedCourse = courses.find(course => course.id === parseInt(id));
    return (
        <div>
            <NavSection />
            <Announcement />
            <Container>
                <Row className='my-5'>
                    <Col lg={7} sm={12}>
                        <h1>{selectedCourse?.title}</h1>
                        <p className='lead'>{selectedCourse?.desc}</p>
                    </Col>
                    <Col lg={5} sm={12}>
                        <img src={selectedCourse?.img} alt={selectedCourse?.title} className="img-fluid" />
                    </Col>
                </Row>
                <Row className='features my-3 pt-3'>
                    <Col lg={4} xs={12}>
                        <h3>Estimated {selectedCourse?.duration} weeks</h3>
                        <p>{selectedCourse?.hours} hours per day</p>
                    </Col>
                    <Col lg={4} xs={12}>
                        <h3>Self-paced</h3>
                        <p>Progress at your own speed</p>
                    </Col>
                    <Col lg={4} xs={12}>
                        <h3>$ {selectedCourse?.price}</h3>
                        <p>Optional upgrade available</p>
                    </Col>
                </Row>
                <Row className='w-50 mx-auto my-5'>
                    <h3 className='my-3'>There is one session available: </h3>
                    <div className='card w-50 mx-auto shadow- py-2'>
                        <h4>Starts: {selectedCourse?.start}</h4>
                        <Button className="enroll-btn">Enroll</Button>
                    </div>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Details;