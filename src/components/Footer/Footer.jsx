import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-bg py-5 text-white'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={4} sm={12}>
                        <div className='text-start'>
                            <span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                </span>
                                <h5 className='mt-2'><b>Office:</b> SUST, Sylhet, Bangladesh</h5>
                            </span>
                            <span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                    </svg>
                                </span>
                                <h5 className='mt-2'><b>Official:</b> ed-tech@gmail.com</h5>
                            </span>
                            <span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>
                                </span>
                                <h5 className='mt-2'><b>Helpline:</b> 0000213884281 (Available: 10AM - 5PM)</h5>
                            </span>
                        </div>
                    </Col>
                    <Col lg={4} sm={12}>
                        <img src="https://www.pngitem.com/pimgs/m/668-6689598_payment-gateway-in-bangladesh-hd-png-download.png" alt="paymeny-gateway" className='img-fluid' />
                    </Col>
                    <Col lg={4} sm={12}>
                        <h3>Visit Pages</h3>
                        <span className='f-links'>
                            <Link to="/courses">COURSES</Link>
                            <Link to="/about">ABOUT</Link>
                            <Link to="/contact">CONTACT</Link>
                            <Link to="/home">HOME</Link>
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;