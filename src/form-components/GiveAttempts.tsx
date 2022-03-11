import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAtLeft] = useState<number>(3);
    const [attemptsAdded, setAdded] = useState<number>(0);

    function addToAttempts(event: ChangeEvent) {
        setAdded(parseInt(event.target.value));
    }

    function addAndRest(num: number) {
        if (!isNaN(num)) {
            setAtLeft(num + attemptsLeft);
            setAdded(0);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="add attempts">
                <Form.Label>How many attempts to add?</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsAdded}
                    onChange={addToAttempts}
                />
            </Form.Group>
            <div></div>
            <div>
                <Button onClick={() => addAndRest(attemptsAdded)}>gain</Button>
            </div>
            <div>
                <Button
                    onClick={() => setAtLeft(attemptsLeft - 1)}
                    disabled={attemptsLeft === 0}
                >
                    use
                </Button>
            </div>
            <div>{attemptsLeft}</div>
        </div>
    );
}
