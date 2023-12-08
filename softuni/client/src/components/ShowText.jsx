import { useState } from "react";
import {EXAMPLES} from "../assets/examples"

const ShowText = () => {    
    const [text, setText] = useState(EXAMPLES[0].text);
    return (
        <div>
            <h1>Show Text</h1>
            <div className="show-text-container" >
                <div className="show-text-card">
                    <h2>{text}</h2>
                </div>
            </div>
        </div>
    )
}