import React from 'react';
import { Link } from 'react-router-dom';

const Announcement = () => {
    return (
        <div className='bg-info d-flex justify-content-center align-items-center text-dark fs-6 fw-bold py-2'>
            <marquee>50% discount offer going on new courses.<Link className='text-danger fs-6 text-decoration-underline d-inline m-0 p-0' to="/courses">Visit our courses</Link></marquee>
        </div>
    );
};

export default Announcement;