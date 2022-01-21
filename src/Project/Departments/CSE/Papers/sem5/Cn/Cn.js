import React from 'react'
import { Button, Container } from 'react-bootstrap';

class Cn extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>Computer Science & Engineering</h1>
                    <h4>Computer Networking</h4>

                    <ul>
                        <h5>2021</h5>
                        <Container>
                            <a target={"blank"} href='#'>
                                <Button variant='outline-secondary'><li>mse1</li></Button>
                            </a>
                            <a target={"blank"} href='#'>
                                <Button variant='outline-secondary'><li>mse2</li></Button>
                            </a>
                            <a target={"blank"} href='#'>
                                <Button variant='outline-secondary'><li>mse3</li></Button>
                            </a>
                        </Container>
                    </ul>
                </Container>

            </div>
        );
    }
}

export default Cn;