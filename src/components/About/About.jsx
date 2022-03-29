import React from 'react';
import Announcement from '../Announcement/Announcement';
import Footer from '../Footer/Footer';
import NavSection from '../NavSection/NavSection';

const About = () => {
    return (
        <div>
            <NavSection />
            <Announcement />
            <div style={{ minHeight: "70vh" }} className='d-flex align-items-center justify-content-center'>
                <h2>Page is Under Construction</h2>
            </div>
            <Footer />
        </div>
    );
};

export default About;