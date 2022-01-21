import React from 'react'
import { Button, Container } from 'react-bootstrap';

class Dbms extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <h1> Computer Science & Engineering</h1>
                    <h4>Database Management System</h4>

                    <ul>
                        <h5>2021</h5>
                        <Container>
                            <a target={"blank"} href='https://previousyrpaper.s3.ap-south-1.amazonaws.com/cse/3rd+sem/even/DBMS/MSE-I-DBMS.pdf'>
                                <Button variant='outline-secondary'><li>mse1</li></Button>
                            </a>
                            <a target={"blank"} href='https://previousyrpaper.s3.ap-south-1.amazonaws.com/cse/3rd+sem/even/DBMS/MSE-II-DBMS-+final-converted.pdf'>
                                <Button variant='outline-secondary'><li>mse2</li></Button>
                            </a>
                            <a target={"blank"} href='https://previousyrpaper.s3.ap-south-1.amazonaws.com/cse/3rd+sem/even/DBMS/MSE-III-DBMS-QP.pdf'>
                                <Button variant='outline-secondary'><li>mse3</li></Button>
                            </a>
                        </Container>
                    </ul>
                </Container>

            </div>
        );
    }
}

export default Dbms;