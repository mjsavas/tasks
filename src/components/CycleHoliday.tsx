import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "N" | "M" | "E" | "T" | "C";
const alphaOrder: Holiday[] = ["C", "E", "M", "N", "T"];
const yearOrder: Holiday[] = ["M", "E", "T", "C", "N"];
const emojis: string[] = ["🎁", "🦃", "👴🏾", "🎄", "🐇"];

export function CycleHoliday(): JSX.Element {
    const [hol, setHoliday] = useState<Holiday>("E");

    function changeAlpha(): void {
        const location = alphaOrder.findIndex((s) => s === hol);
        if (location < 4) {
            setHoliday(alphaOrder[location + 1]);
        } else {
            setHoliday(alphaOrder[0]);
        }
    }
    function changeYear(): void {
        const location = yearOrder.findIndex((s) => s === hol);
        if (location < 4) {
            setHoliday(yearOrder[location + 1]);
        } else {
            setHoliday(yearOrder[0]);
        }
    }
    function displayEmoji(): string {
        if (hol === "C") {
            return emojis[0];
        }
        if (hol === "T") {
            return emojis[1];
        }
        if (hol === "M") {
            return emojis[2];
        }
        if (hol === "N") {
            return emojis[3];
        } else {
            return emojis[4];
        }
        return "";
    }

    return (
        <div>
            Cycle Holiday
            <p>Holiday: {displayEmoji()}</p>
            <p>
                <Button onClick={changeAlpha}>Advance by Alphabet</Button>
            </p>
            <p>
                <Button onClick={changeYear}>Advance by Year</Button>
            </p>
        </div>
    );
}
