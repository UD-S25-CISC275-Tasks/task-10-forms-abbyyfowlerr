import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = ["red", "orange", "yellow", "green", "blue", "purple", "navy", 
    "aqua", "olive", "fuchsia", "maroon", "gray", "white", "black"]
const DEFAULT_COLOR = COLORS[0];


export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        name="colorOptions"
                        value={color}
                        label={color}
                        onChange={updateColor}
                    />
                ))}
            </div>
            <div>
                You have chosen{" "}
                {
                    <span
                        style={{ backgroundColor: color }}
                        data-testid={"colored-box"}
                    >
                        {color}.
                    </span>
                }
            </div>
        </div>
    );
}
