import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Course = (props) => {
    const { course } = props;
    return (
        <Col className='card-course' style={{ backgroundColor: `${course.bg}` }}>
            <div>
                <img src={course.img} alt={course.title} className="w-100" />
            </div>
            <div className="text-start grid-card p-3 card-text">
                <div style={{ color: `${course.bg}` === "white" ? "black" : `white`, "&:hover": { color: 'white' } }}>
                    <h3>{course.title}</h3>
                </div>
                <div style={{ color: `${course.bg}` === "white" ? "black" : `white` }}>
                    <h4 className='text-danger fw-bold'>FEE: ${course.price}</h4>
                    <p>Duration: {course.duration}weeks</p>
                    <p>Orientation: {course.start}</p>
                </div>
                <div>
                    <Link to={`/courses/${course.id}`}><Button className='enroll-btn w-100'>ENROLL NOW</Button></Link>
                </div>
            </div>
        </Col >
    );
};

export default Course;