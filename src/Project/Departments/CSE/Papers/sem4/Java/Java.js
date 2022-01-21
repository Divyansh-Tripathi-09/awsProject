import React from 'react'
import { Button, Container } from 'react-bootstrap';

class Java extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <h1> Computer Science & Engineering</h1>
                    <h4>JAVA</h4>

                    <ul>
                        <h5>2021</h5>
                        <Container>
                            {/* <a target={"blank"} href='https://previousyrpaper.s3.ap-south-1.amazonaws.com/cse/3rd+sem/even/Java/Java+CSE+MSE-1+2021.pdf'>
                                <Button variant='outline-secondary'><li>mse1</li></Button>
                            </a> */}
                            <a target={"blank"} href='https://previousyrpaper.s3.ap-south-1.amazonaws.com/cse/3rd+sem/even/Java/JAVA+MSE2-QP.pdf'>
                                <Button variant='outline-secondary'><li>mse2</li></Button>
                            </a>
                            <a target={"blank"} href='https://previousyrpaper.s3.ap-south-1.amazonaws.com/cse/3rd+sem/even/Java/JAVA+MSE3-QP.pdf'>
                                <Button variant='outline-secondary'><li>mse3</li></Button>
                            </a>
                        </Container>
                    </ul>
                </Container>

            </div>
        );
    }
}

export default Java;