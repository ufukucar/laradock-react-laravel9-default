import React, {useEffect, useState} from "react";

export default function Name(props) {

    const [name, setName] = useState();



    return (
        <div className="name">
            <h1>Name JSX</h1>
             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>{name}</p>
        </div>
    );
}
