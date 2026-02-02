import React from "react";

const Collapse = ({ question, answer }) => {
  return (
    <div
      tabIndex={0}
      className="collapse md:w-3xl mx-auto collapse-plus bg-base-100 p-5 border border-primary"
    >
      <div className="collapse-title font-semibold">{question}</div>
      <div className="collapse-content text-sm">{answer}</div>
    </div>
  );
};

export default Collapse;
