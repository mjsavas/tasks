import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Michael Savas
            </header>
            <h1>Elephant</h1>
            <img
                src="https://cdn.britannica.com/72/272-004-381F66E5.jpg"
                alt="This is a picture of a elephant"
            />
            <ol>
                <li>Elephants can live to be 70 years old</li>
                <li>
                    Elephants packs are always lead by a head female matriach
                </li>
                <li>There are three species of elephants over the world</li>
            </ol>
            <Container>
                <Row>
                    <Col>
                        Pros of Elephants: Cute,Friendly, and Smart
                        <div
                            style={{
                                width: "100px",
                                height: "10px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Cons of Elephants: None they are the best
                        <div
                            style={{
                                width: "100px",
                                height: "10px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <p>Hello World</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;