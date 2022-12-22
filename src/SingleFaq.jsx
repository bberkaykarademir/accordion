import React, { useState } from "react";

const SingleFaq = ({ id, title, info }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="singleFaq">
      <div className="titlesec">
        <h2>{title}</h2>
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <p>{info}</p>}
    </div>
  );
};

export default SingleFaq;
