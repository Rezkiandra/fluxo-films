import React from "react";
import SpiderImage from "../../assets/images/spiderman.jpg"
import MeganImage from "../../assets/images/megan.jpg"
import AvengerImage from "../../assets/images/endgame.jpg"

import { Container, Card, Col } from "react-bootstrap";

export const Upcoming = () => {
    return (
        <>
            <Container className="d-lg-flex justify-content-center align-items-center gap-5">
                <Col className="col-lg-3">
                    <Card className="my-3">
                        <Card.Img variant="top" src={SpiderImage} />
                        <Card.Body>
                            <Card.Title className="text-center text-uppercase">Spiderman: No Way Home</Card.Title>
                            <Card.Text className="text-center text-capitalize">a poor sickly orphan, is bitten by a radioactive spider
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-lg-3">
                    <Card className="my-3">
                        <Card.Img variant="top" src={MeganImage} />
                        <Card.Body>
                            <Card.Title className="text-center text-uppercase">Megan</Card.Title>
                            <Card.Text className="text-center text-capitalize">a roboticist who works for a company that builds AI toys
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-lg-3">
                    <Card className="my-3">
                        <Card.Img variant="top" src={AvengerImage} />
                        <Card.Body>
                            <Card.Title className="text-center text-uppercase">Avengers: End Game</Card.Title>
                            <Card.Text className="text-center text-capitalize">A American superhero film based on the Marvel Comics
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </>
    )
}