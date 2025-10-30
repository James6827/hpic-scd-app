import { useState } from "react";
import { quizQs } from "../data/module1.js";

export default function Quiz({ lang = "en" }) {
  // Keeps track of user's answers
  const [answers, setAnswers] = useState({});
  // Stores the user's score once they submit the quiz.
  const [score, setScore] = useState(null);

  // Fuction that calculates the score 
  function submit() {
    let s = 0; // counts correct answers
    
    // Loops over each quiz question with its index
    quizQs.forEach((q, idx) => {
      // Increase the score if the user answers correctly
      if (Number(answers[idx]) === q.correctIdx) s++;
    });
    // Updates the score with correct answers
    setScore(`${s}/${quizQs.length}`);
  }

  return (
    <section>
      <h2>Health Quiz</h2>
      
      {quizQs.map((q, idx) => {
        const text = lang === "en" ? q.q_en : q.q_fr;
        return (
          <div key={idx} style={{border:"1px solid #ddd", borderRadius:8, padding:12, margin:"12px 0"}}>
            <p><strong>Q{idx+1}.</strong> {text}</p>
            {q.options.map((o, oi) => (
              <label key={oi} style={{display:"block", marginBottom:6}}>
                <input type="radio" name={`q${idx}`} value={oi}
                  onChange={()=>setAnswers(a=>({...a, [idx]: oi}))} /> {o}
              </label>
            ))}
          </div>
        );
      })}
      <button onClick={submit}>Submit</button>
      {score && <p>Your score: {score}</p>}
    </section>
  );
}
