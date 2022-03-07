import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

interface setTeamState {
    setTeam: (newOptions: string[]) => void;
    team: string[];
}

export function ChooseTeam(): JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember({ setTeam, team }: setTeamState, newMember: string) {
        if (!team.includes(newMember)) {
            setTeam([...team, newMember]);
        }
    }

    function clearTeam({ setTeam }: setTeamState) {
        setAllOptions(PEOPLE);
        setTeam([]);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() =>
                                    chooseMember({ setTeam, team }, option)
                                }
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={() => clearTeam({ setTeam, team })}>
                        Clear Team
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
