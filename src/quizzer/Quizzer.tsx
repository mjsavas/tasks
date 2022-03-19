import React from "react";
import image from "../quiz_pic1.jpg";

export function Quizzer(): JSX.Element {
    return (
        <h3>
            Quizzer
            <img src={image} alt="This is a picture of a elephant" />
        </h3>
    );
}
