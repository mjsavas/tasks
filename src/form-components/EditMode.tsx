import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): JSX.Element {
    const [editmode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateName(event: ChangeEvent) {
        setUserName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-editmode"
                label="Switch to Edit Mode"
                checked={editmode}
                onChange={updateEdit}
            />
            <div>
                {editmode && (
                    <>
                        <Form.Group controlId="editName">
                            <Form.Label>Student</Form.Label>
                            <Form.Control
                                value={userName}
                                onChange={updateName}
                            />
                        </Form.Group>
                        <Form.Check
                            type="switch"
                            id="is-stduent"
                            label="Are they a student"
                            checked={isStudent}
                            onChange={updateStudent}
                        />
                    </>
                )}
                <div>
                    {!editmode &&
                        (isStudent
                            ? userName + " is a student"
                            : userName + " is not a student")}
                </div>
            </div>
        </div>
    );
}
