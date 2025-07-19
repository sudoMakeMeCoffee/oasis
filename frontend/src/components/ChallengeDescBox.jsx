import React from "react";
import ReactMarkdown from "react-markdown";

const ChallengeDescBox = ({ challenge }) => {
  return (
    <div className="w-full">
      <ReactMarkdown>{challenge?.description}</ReactMarkdown>
    </div>
  );
};

export default ChallengeDescBox;
