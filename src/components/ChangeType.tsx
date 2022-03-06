import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setValue] = useState<QuestionType>("short_answer_question");

    function flipType(): void {
        if (type.toString() === "multiple_choice_question") {
            setValue("short_answer_question");
        } else {
            setValue("multiple_choice_question");
        }
    }
    const butt =
        type.toString() === "multiple_choice_question"
            ? "Multiple Choice"
            : "Short Answer";
    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            <div>{butt}</div>
        </div>
    );
}
