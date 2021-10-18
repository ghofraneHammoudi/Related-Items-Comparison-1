import React from 'react'
import Answer from './Answer.jsx'

 function question(props) {
    return (
        <div>
            {props.data.map((question,i)=>(
            <div key={i} className=" grid grid-cols-4 ">
              <div className="col-span-2 flex flex-row space-x-1">
                <p className="text-1xl text-black font-bold">Q:</p>
                <p>{question.question_body}</p>
              </div>
              <div className="col-span-2 ">
                <span className="text-xs font-thin space-x-1.5">
                  {" "}
                  Helpful? Yes({question.question_helpfulness}) |{" "}
                </span>
                <span className="underline text-xs font-thin space-x-1.5">
                  Add Answer
                </span>
              </div>
              <Answer question={question}/>
            </div>

          ))}
            
        </div>
    )
}
export default question;