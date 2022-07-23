import React, { Component } from "react";
import { Form, Label, Input, FormGroup, Button, Container, Row, Col } from "reactstrap";
import "./css/signup.css";

class Signup extends Component {
  render() {
    return (
      <div className="mainScreen">
        <Container>
          <Row>
            <Col className="p-5 textSignup">Sign Up</Col>
          </Row>
          <Row className="">
            <Col className=""></Col>
            <div className="boxSignup">
              <Col className="">
                <Form inline className="colorText">
                  <FormGroup className="mb-2 me-sm-2 mb-sm-2">
                    <Label className="me-sm-2" for="exampleName">
                      Full Name
                    </Label>
                    <Input id="exampleName" name="name" placeholder="Reactono" type="name" />
                  </FormGroup>
                  <FormGroup className="mb-2 me-sm-2 mb-sm-2">
                    <Label className="me-sm-2" for="exampleCountry">
                      Country
                    </Label>
                    <Input id="exampleCountry" name="country" placeholder="Indonesia" type="country" />
                  </FormGroup>
                  <FormGroup className="mb-2 me-sm-2 mb-sm-2">
                    <Label className="me-sm-2" for="exampleEmail">
                      Email
                    </Label>
                    <Input id="exampleEmail" name="email" placeholder="something@idk.cool" type="email" />
                  </FormGroup>
                  <FormGroup className="mb-2 me-sm-2 mb-sm-2">
                    <Label className="me-sm-2" for="examplePassword">
                      Password
                    </Label>
                    <Input id="examplePassword" name="password" placeholder="don't tell!" type="password" />
                  </FormGroup>
                  <p></p>
                  <Button className="">Sign Up</Button>
                </Form>
              </Col>
            </div>
            <Col className=""></Col>
          </Row>
          <Row>
            <Col className=""></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Signup;
