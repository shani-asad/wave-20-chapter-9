import React, { Component, Fragment } from "react";
import { Col, Container, Row, Media } from "reactstrap";
import GameCardDetail from "../components/GameCardDetail";

class GameDetail extends Component {
    render(){
        return(
            <Fragment>
                <Container>
                    <GameCardDetail/>
                </Container>
                <Container>
                    <Row className="mt-3">
                        <Col className="border">
                            <h3>
                                Leader Board
                            </h3>
                        </Col>
                    </Row>
                    <Row className="mt-3 text-center">
                        <Col className="border rounded shadow">
                            <Media object src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" className="mt-1 img-thumbnail w-25 rounded" alt="..." />
                            <h5>Egi Maulana</h5>
                            <p>Point : 600</p>
                        </Col>
                        <Col className="border rounded shadow mx-2">
                            <Media object src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" className="mt-1 img-thumbnail w-25 rounded" alt="..." />
                            <h5>Egi Maulana</h5>
                            <p>Point : 500</p>
                        </Col>
                        <Col className="border rounded shadow">
                            <Media object src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" className="mt-1 img-thumbnail w-25 rounded" alt="..." />
                            <h5>Egi Maulana</h5>
                            <p>Point : 400</p>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="col-12">
                            <h3>
                                Description
                            </h3>
                        </Col>
                        <Col className="col-12">
                            <p>
                                This is the description of Rock Scissor Paper Game. This is the description of Rock Scissor Paper Game. This is the description of Rock Scissor Paper Game. This is the description of Rock Scissor Paper Game. This is the description of Rock Scissor Paper Game.
                            </p>
                            <p>
                                This is the description of Rock Scissor Paper Game. This is the description of Rock Scissor Paper Game. This is the description of Rock Scissor Paper Game. This is the description of Rock Scissor Paper Game. This is the description of Rock Scissor Paper Game.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default GameDetail