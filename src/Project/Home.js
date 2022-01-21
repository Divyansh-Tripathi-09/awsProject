import React from "react";
import * as rb from "react-bootstrap";
import "./home.css";
import { Link } from 'react-router-dom'

const ae  = require('./pictures/ae.jpeg');
const ce  = require('./pictures/ce.jpeg');
const cse  = require('./pictures/cse.jpeg');
const ec  = require('./pictures/ec.jpeg');
const eee  = require('./pictures/eee.jpeg');
const ise  = require('./pictures/ise.jpeg');
const me  = require('./pictures/me.jpeg');

class Home extends React.Component {

  render() {
    return (
      <div>
        <rb.Container>
          <ul className="flex-cols">
            <li className="department">
              <Link to={"/ae"}>
              <rb.Card style={{ width: "18rem" }}>
                <rb.Card.Img variant="top" src={ae} />
                <rb.Card.Body>
                  <rb.Card.Title>Aeronautical Engineering</rb.Card.Title>
                </rb.Card.Body>
              </rb.Card>    
              </Link>
            </li>
            <li className="department">
              <Link to={"/ce"}>
              <rb.Card style={{ width: "18rem" }}>
                <rb.Card.Img variant="top" src={ce} />
                <rb.Card.Body>
                  <rb.Card.Title>Civil Engineering</rb.Card.Title>
                </rb.Card.Body>
              </rb.Card>
              </Link>
            </li>
            <li className="department">
              <Link to={"/cse"}>
              <rb.Card style={{ width: "18rem" }}>
                <rb.Card.Img variant="top" src={cse} />
                <rb.Card.Body>
                  <rb.Card.Title>Computer Science & Engineering</rb.Card.Title>
                </rb.Card.Body>
              </rb.Card>
              </Link>
            </li>
            <li className="department">
              <Link to={"/Ece"}>
              <rb.Card style={{ width: "18rem" }}>
                <rb.Card.Img variant="top" src={ec} />
                <rb.Card.Body>
                  <rb.Card.Title>Electonics & Communication Engineering</rb.Card.Title>
                </rb.Card.Body>
              </rb.Card>
              </Link>
            </li>
            <li className="department">
              <Link to={"/eee"}>
              <rb.Card style={{ width: "18rem" }}>
                <rb.Card.Img variant="top" src={eee} />
                <rb.Card.Body>
                  <rb.Card.Title>Electrical & Electronics Engineering</rb.Card.Title>
                </rb.Card.Body>
              </rb.Card>
              </Link>
            </li>
            <li className="department">
              <Link to={"/ise"}>
              <rb.Card style={{ width: "18rem" }}>
                <rb.Card.Img variant="top" src={ise} />
                <rb.Card.Body>
                  <rb.Card.Title>Information Science & Engineering</rb.Card.Title>
                </rb.Card.Body>
              </rb.Card>
              </Link>
            </li>
            <li className="department">
              <Link to={"/me"}>
              <rb.Card style={{ width: "18rem" }}>
                <rb.Card.Img variant="top" src={me} />
                <rb.Card.Body>
                  <rb.Card.Title>Mechanical Engineering</rb.Card.Title>  
                </rb.Card.Body>
              </rb.Card>
              </Link>
            </li>
          </ul>
        </rb.Container>
      </div>
    );
  }
}

export default Home;
