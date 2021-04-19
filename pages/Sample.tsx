import React, { useState } from "react";

export default function Component() {
    const [user, setUser] = useState<string>("");

    const handleClick = (num) => {
        console.log("Click" + num);
        setUser("");
    };

    return (
        <div>
            <h1>Sample Page</h1>
            {user}
            <button onClick={() => handleClick("user")}>ぼたん</button>
        </div>
    );
}
