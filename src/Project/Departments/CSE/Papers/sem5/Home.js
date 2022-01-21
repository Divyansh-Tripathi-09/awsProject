import React from 'react'
import { Link } from 'react-router-dom';
import * as rb from "react-bootstrap";

const colStyle = {
    margin: "3em",
    diplay: "flex",
}

class Sem5 extends React.Component {
    render() {
        return (
            <rb.Container >
                <rb.Row>
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/5/cn`}>
                            <rb.Button variant="outline-primary">
                                Computer Networking
                            </rb.Button>
                        </Link>

                    </rb.Col >
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/5/flat`}>
                            <rb.Button variant="outline-primary">
                                Formal Languages And Automata Theory
                            </rb.Button>
                        </Link>
                    </rb.Col>
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/5/dm`}>
                            <rb.Button variant="outline-primary">
                                Data Mining
                            </rb.Button>
                        </Link>
                    </rb.Col>
                </rb.Row>
                <rb.Row>
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/5/se`}>
                            <rb.Button variant="outline-primary">
                                Software Engineering
                            </rb.Button>
                        </Link>
                    </rb.Col>
                    <rb.Col style={colStyle}>
                        <Link to={`/cse/5/ainn`}>
                            <rb.Button variant="outline-primary">
                                Artificial Intelligence and Neural Networks
                            </rb.Button>
                        </Link>
                    </rb.Col>
                </rb.Row>
            </rb.Container>
        );
    }
}

export default Sem5;