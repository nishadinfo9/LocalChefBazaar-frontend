import React from "react";

const Collapse = ({ question, answer }) => {
  return (
    <div
      tabIndex={0}
      className="collapse w-2xl mx-auto collapse-plus bg-base-100 border-secondary border"
    >
      <div className="collapse-title font-semibold">{question}</div>
      <div className="collapse-content text-sm">{answer}</div>
    </div>
  );
};

export default Collapse;
