import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [inEdit, setInEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>){
        setInEdit(event.target.checked)
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked)
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="in-edit-check"
                label="Edit?"
                checked={inEdit}
                onChange={updateEdit}
            />
            {!inEdit && (
                <div>
                    {name} is {isStudent ? "a" : "not a"} student
                </div>
            )}
            {inEdit && (
                <Form.Group controlId="formStudentName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
            )}
            {inEdit && (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Student?"
                    checked={isStudent}
                    onChange={updateStudent}
                />
            )}
        </div>
    );
}
