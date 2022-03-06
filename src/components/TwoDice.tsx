import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1, setdice1] = useState<number>(1);
    const [d2, setdice2] = useState<number>(2);
    //const [result, setResult] = useState<string>("Lose");

    function rollD1(): void {
        setdice1(d6);
    }

    function rollD2(): void {
        setdice2(d6);
    }

    function win(): string | null {
        if (d1 !== d2) {
            return null;
        }
        if (d1 === d2 && d1 === 1) {
            return "Lose";
        } else {
            return "Win";
        }
    }
    return (
        <div>
            Two Dice
            <p>
                <Button onClick={rollD1}>Roll Left</Button>
            </p>
            <p>
                <Button onClick={rollD2}>Roll Right</Button>
            </p>
            <p>{win()}</p>
            <p>
                Dice one is <span data-testid="left-die">{d1}</span>
            </p>
            <p>
                Dice two is <span data-testid="right-die">{d2}</span>
            </p>
        </div>
    );
}
