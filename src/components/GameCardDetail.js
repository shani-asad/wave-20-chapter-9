import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText,
    Button,
} from "reactstrap";

class GameCardDetail extends Component {
    render() {
        return(
            <Fragment>
                <div>
                    <Card inverse>
                        <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/900/270?grayscale"
                        style={{
                            height: 450
                        }}
                        width="100%"
                        />
                        <CardImgOverlay className="justify-content-end">
                            <CardTitle tag="h5">
                                Card Title
                            </CardTitle>
                            <CardText>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </CardText>
                            <CardText>
                                <small className="text-muted">
                                Last updated 3 mins ago
                                </small>
                            </CardText>
                            <Link to='/'>
                                <Button color="primary">
                                    Play
                                </Button>
                            </Link>
                        </CardImgOverlay>
                    </Card>
                </div>
            </Fragment>
        )
    }
}

export default GameCardDetail