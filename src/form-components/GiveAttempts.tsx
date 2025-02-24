import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [reqAttempts, setReqAttemps] = useState<string>('0');



    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                Number of attempts: {attempts}
            </div>
            <Form.Group controlId="formAttemps">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setReqAttemps(event.target.value)}}
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() => {
                        setAttempts(attempts - 1);
                    }}
                    disabled={attempts <= 0}
                >
                    use
                </Button>
                <Button
                    onClick={() => {
                        if (reqAttempts != "" && parseInt(reqAttempts,10) > 0) {
                            setAttempts(attempts + parseInt(reqAttempts, 10));
                        }
                    }}
                >
                    gain
                </Button>
            </div>
        </div>
    );
}
