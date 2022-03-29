import React from 'react';
import Announcement from '../Announcement/Announcement';
import Footer from '../Footer/Footer';
import NavSection from '../NavSection/NavSection';

const Dashboard = () => {
    return (
        <div>
            <NavSection />
            <Announcement />
            <div style={{ height: "40vh" }} className="d-flex justify-content-center align-items-center">
                <h2 className='text-danger'>Dashboard is under construction</h2>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;