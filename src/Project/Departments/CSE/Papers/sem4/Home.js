import React from 'react'
import { Link } from 'react-router-dom';
import * as rb from "react-bootstrap";

const colStyle = {
    margin: "3em",
    diplay: "flex",
}

class Sem4 extends React.Component {
    render() {
        return (
            <rb.Container >
                <rb.Row>
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/4/dbms`}>
                            <rb.Button variant="outline-primary">
                                Database Management System [DBMS]
                            </rb.Button>
                        </Link>

                    </rb.Col >
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/4/java`}>
                            <rb.Button variant="outline-primary">
                                JAVA
                            </rb.Button>
                        </Link>
                    </rb.Col>
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/4/daa`}>
                            <rb.Button variant="outline-primary">
                                Design And Analysis of Algorithms[DAA]
                            </rb.Button>
                        </Link>
                    </rb.Col>
                </rb.Row>
                <rb.Row>
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/4/os`}>
                            <rb.Button variant="outline-primary">
                                Operating System [OS]
                            </rb.Button>
                        </Link>
                    </rb.Col>
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/4/m4`}>
                            <rb.Button variant="outline-primary">
                                Engineering Mathematics-IV [M4]
                            </rb.Button>
                        </Link>
                    </rb.Col>
                </rb.Row>
            </rb.Container>
        );
    }
}

export default Sem4;