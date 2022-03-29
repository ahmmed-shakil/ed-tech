import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Announcement from '../Announcement/Announcement';
import Course from '../Course/Course';
import CoursesSection from '../CoursesSection/CoursesSection';
import Footer from '../Footer/Footer';
import NavSection from '../NavSection/NavSection';

const Courses = () => {

    return (
        <div>
            <NavSection />
            <Announcement />
            <CoursesSection />
            <div className='mt-3'>
                <Footer />
            </div>
        </div>
    );
};

export default Courses;