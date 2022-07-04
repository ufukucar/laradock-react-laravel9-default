import React from "react";

export default function Name(props) {
  return (
    <div className="name">
      <h1>Name JSX</h1>
        <h2>Hello from { props.name}</h2>
    </div>
  );
}
