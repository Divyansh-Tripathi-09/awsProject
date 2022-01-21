import React from 'react'
import { Link } from 'react-router-dom';
import * as rb from "react-bootstrap";

const colStyle = {
    margin: "3em",
    diplay: "flex",
}

class Cse extends React.Component {
    render() { 
        return (
            <rb.Container>
                <rb.Row>
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/1`}><rb.Button variant="outline-primary">Semester 1</rb.Button></Link>
                    </rb.Col>
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/2`}><rb.Button variant="outline-primary">Semester 2</rb.Button></Link>
                    </rb.Col>
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/3`}><rb.Button variant="outline-primary">Semester 3</rb.Button> </Link>
                    </rb.Col>
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/4`}><rb.Button variant="outline-primary">Semester 4</rb.Button></Link>
                    </rb.Col>
                </rb.Row>
                <rb.Row>
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/5`}><rb.Button variant="outline-primary">Semester 5</rb.Button></Link>
                    </rb.Col>
                    <rb.Col style={colStyle}>
                    <Link to={`/cse/6`}><rb.Button variant="outline-primary">Semester 6</rb.Button></Link>
                    </rb.Col>
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/7`}><rb.Button variant="outline-primary">Semester 7</rb.Button></Link>
                    </rb.Col>
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/8`}><rb.Button variant="outline-primary">Semester 8</rb.Button></Link>
                    </rb.Col>
                </rb.Row>
            </rb.Container>
        );
    }
}
 
export default Cse;