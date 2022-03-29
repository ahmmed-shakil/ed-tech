import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Faq = () => {
    return (
        <Container className='my-5 py-5'>
            <h1 className='mb-5'>Frequently Asked Questions About The Course</h1>
            <Accordion className='text-start fs-2'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='py-3 text-dark'>Why you should enroll in this course?</Accordion.Header>
                    <Accordion.Body>
                        You want to be a programmer. But you are not being able to keep pace alone. Looking for a full guideline or you want to get an intern or job after finishing the leraning process perfectly but don't know the way. This course is for you.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='py-3 text-dark'>What ar ethe prerequisities for starting this course?</Accordion.Header>
                    <Accordion.Body>
                        We are starting from zero. So you don't need to know a lot before starting.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className='py-3 text-dark'>What are included in this course?</Accordion.Header>
                    <Accordion.Body>
                        Basic programming,Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort), Depth-First Search (DFS), Breadth-First Search (BFS)
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className='py-3 text-dark'>How will I get the course videos?</Accordion.Header>
                    <Accordion.Body>
                        The videos will be pre recorded. Everday a new module will be relesed. Each module will include 7-10 videos.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className='py-3 text-dark'>How will it need to be completed?</Accordion.Header>
                    <Accordion.Body>
                        Around 8-10 months for the 1st stage
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Faq; 