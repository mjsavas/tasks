import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAt] = useState<number>(4);
    const [prog, setProg] = useState<boolean>(false);

    function startQuiz(): void {
        setAt(attempts - 1);
        setProg(true);
    }
    function endQuiz(): void {
        setProg(false);
    }
    function mull(): void {
        setAt(attempts + 1);
    }
    return (
        <div>
            <p>{attempts}</p>
            <p>
                {
                    <Button
                        onClick={startQuiz}
                        disabled={prog || attempts === 0}
                    >
                        Start Quiz
                    </Button>
                }
            </p>
            <p>
                {
                    <Button onClick={mull} disabled={prog}>
                        Mulligan
                    </Button>
                }
            </p>
            <p>
                {
                    <Button onClick={endQuiz} disabled={!prog}>
                        Stop Quiz
                    </Button>
                }
            </p>
        </div>
    );
}
