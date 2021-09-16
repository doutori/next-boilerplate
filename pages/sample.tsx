import React, { useState } from "react";
import Button from "~/components/atoms/Button";

export default function Component() {
    const [user, setUser] = useState<string>("");

    const handleClick = (username: string) => {
        console.log("Click" + username);
        setUser("");
    };

    return (
        <div>
            <h1>Sample Page</h1>
            {user}
            <Button type="primary">ボタンです</Button>
            <button onClick={() => handleClick("user")}>ぼたん</button>
        </div>
    );
}
