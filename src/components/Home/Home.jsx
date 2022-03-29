import React from 'react';
import Announcement from '../Announcement/Announcement';
import CourseProcess from '../CourseProcess/CourseProcess';
import CoursesSection from '../CoursesSection/CoursesSection';
import Faculty from '../Faculty/Faculty';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import LatestCourse from '../LatestCourse/LatestCourse';
import NavSection from '../NavSection/NavSection';


const Home = () => {
    return (
        <div>
            <NavSection />
            <Announcement />
            <CoursesSection />
            <LatestCourse />
            <CourseProcess />
            <Faq />
            <Faculty />
            <Footer />
        </div>
    );
};

export default Home;