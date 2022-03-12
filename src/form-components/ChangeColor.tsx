import React, { useState } from "react";
import { Form } from "react-bootstrap";
//edit
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white"
];

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    function updateColor(event: ChangeEvent) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <p>
                <Form.Check
                    inline
                    type="radio"
                    name="choice"
                    onChange={updateColor}
                    id="choice - red"
                    label={<span style={{ backgroundColor: "red" }}>red</span>}
                    value="red"
                    background-color="blue"
                    checked={color === "red"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="choice"
                    onChange={updateColor}
                    id="choice - blue"
                    label={
                        <span style={{ backgroundColor: "blue" }}>blue</span>
                    }
                    value="blue"
                    checked={color === "blue"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="choice"
                    onChange={updateColor}
                    id="choice - green"
                    label={
                        <span style={{ backgroundColor: "green" }}>green</span>
                    }
                    value="green"
                    checked={color === "green"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="choice"
                    onChange={updateColor}
                    id="choice - orange"
                    label={
                        <span style={{ backgroundColor: "orange" }}>
                            orange
                        </span>
                    }
                    value="orange"
                    checked={color === "orange"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="choice"
                    onChange={updateColor}
                    id="choice - purple"
                    label={
                        <span style={{ backgroundColor: "purple" }}>
                            purple
                        </span>
                    }
                    value="purple"
                    checked={color === "purple"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="choice"
                    onChange={updateColor}
                    id="choice - cyan"
                    label={
                        <span style={{ backgroundColor: "cyan" }}>cyan</span>
                    }
                    value="cyan"
                    checked={color === "cyan"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="choice"
                    onChange={updateColor}
                    id="choice - magenta"
                    label={
                        <span style={{ backgroundColor: "magenta" }}>
                            magenta
                        </span>
                    }
                    value="magenta"
                    checked={color === "magenta"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="choice"
                    onChange={updateColor}
                    id="choice - white"
                    label={
                        <span style={{ backgroundColor: "white" }}>white</span>
                    }
                    value="white"
                    checked={color === "white"}
                />
            </p>
            <div>
                You have chosen{" "}
                <span
                    style={{ backgroundColor: color }}
                    data-testid="colored-box"
                >
                    {color}
                </span>
                .
            </div>
        </div>
    );
}
