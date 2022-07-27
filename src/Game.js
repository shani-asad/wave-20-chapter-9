import React, { Component } from "react";
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";
import "./css/game.css";

class Game extends Component {
  render() {
    return (
      // Navbar
      <div className="mainScreenOneGame">
        <Nav>
          <NavItem>
            <NavLink active href="#">
              Back
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <img className="sizeNavItem" src="./assets/logo.png" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <Container className="textNavGame">Rock Paper Scissors</Container>
            </NavLink>
          </NavItem>
        </Nav>
        {/* Content */}
        <Container>
          {/* Baris 1 */}
          <Row className="textOnePageGame">
            <Col className=""></Col>
            <Col className="">Player 1</Col>
            <Col className=""></Col>
            <Col className="">Com</Col>
            <Col className=""></Col>
          </Row>
          {/* Baris 2 */}
          <Row className="positionItem">
            <Col className=""></Col>
            <Col className="batu" id="play-batu">
              <a href="#">
                <img className="sizeItem" src="./assets/batu.png" alt="batu" />
              </a>
            </Col>
            <Col className=""></Col>
            <Col className="" id="com-batu">
              <a href="#">
                <img className="sizeItem" src="./assets/batu.png" alt="batu" />
              </a>
            </Col>
            <Col className=""></Col>
          </Row>
          {/* Baris 3 */}
          <Row className="positionItem">
            <Col className=""></Col>
            <Col className="" id="play-kertas">
              <a href="#">
                <img className="sizeItem" src="./assets/kertas.png" alt="kertas" />
              </a>
            </Col>
            <Col className="" id="vs">
              <img className="sizeItemTwo" src="./assets/VS.png" alt="VS" />
            </Col>
            <Col className="" id="com-kertas">
              <a href="#">
                <img className="sizeItem" src="./assets/kertas.png" alt="kertas" />
              </a>
            </Col>
            <Col className=""></Col>
          </Row>
          {/* Baris 4 */}
          <Row className="positionItem">
            <Col className=""></Col>
            <Col className="" id="play-gunting">
              <a href="#">
                <img className="sizeItem" src="./assets/gunting.png" alt="gunting" />
              </a>
            </Col>
            <Col className=""></Col>
            <Col className="" id="com-gunting">
              <a href="#">
                <img className="sizeItem" src="./assets/gunting.png" alt="gunting" />
              </a>
            </Col>
            <Col className=""></Col>
          </Row>
          {/* Baris 5 */}
          <Row className="positionItem">
            <Col className=""></Col>
            <Col className=""></Col>
            <Col className="" id="refresh">
              <img className="" src="./assets/refresh.png" alt="refresh" />
            </Col>
            <Col className=""></Col>
            <Col className=""></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Game;
