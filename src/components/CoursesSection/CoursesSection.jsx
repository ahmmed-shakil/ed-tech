import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const CoursesSection = () => {
    const [courses] = useCourses();
    return (
        <div>
            <div className='bg-courses py-5'>
                <h1 className='text-white fw-bolder'>App Development Courses</h1>
            </div>
            <h4 className='text-dark py-3 mb-3'>Learn app development online from the world's leading universities on ED-TECH!</h4>

            <Container>
                <div className="cards">

                    {
                        courses.map(course => <Course course={course} key={course.id}></Course>)
                    }

                </div>
            </Container>
        </div>
    );
};

export default CoursesSection;