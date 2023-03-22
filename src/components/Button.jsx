import React from "react";

export default function Button(props) {
  return (
    <div>
      <button
        style={{ border: props.border }}
        className="py-1 transition-all px-5 rounded-2xl font-semibold text-[#0156FF] mx-2 hover:bg-[#0156FF] hover:text-white"
      >
        {props.title}
      </button>
    </div>
  );
}
