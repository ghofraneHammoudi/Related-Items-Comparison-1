import React from "react";

function Answer({ question }) {
  return (
    <div>
      {Object.values(question.answers).map((answer, i) => (
        <div>
          {}
          <p className=" text-1xl text-black font-bold ">A:</p>
          <span />
          {answer.body}
          <div className="row-span-1">
            <span className="text-xs font-thin space-x-1.5">
              by User1337,May 1,2019
            </span>
            <span className="text-xs font-thin space-x-1.5">| Helpful?</span>
            <span className="underline text-xs font-thin space-x-1.5">
              {" "}
              Yes{" "}
            </span>
            <span className="no-underline text-xs font-thin space-x-1.5">
              (0)
            </span>{" "}
            <span className="underline text-xs font-thin space-x-1.5">
              | Report
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Answer;
