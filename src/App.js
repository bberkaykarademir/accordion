import React, { useState } from "react";
import data from "./data";
import SingleFaq from "./SingleFaq";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="container">
      <div className="title">
        <h1>Questions and Answers About Login</h1>
      </div>

      <div className="faq">
        {questions.map((question, index) => {
          return <SingleFaq key={index} {...question} />;
        })}
      </div>
    </div>
  );
};

export default App;
