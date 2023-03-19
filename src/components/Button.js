import React from "react";

export default function Button(props) {
  return (
    <div>
      <button
        style={{ border: props.border }}
        className="p-1 rounded-xl text-blue-500 mx-2"
      >
        {props.title}
      </button>
    </div>
  );
}
