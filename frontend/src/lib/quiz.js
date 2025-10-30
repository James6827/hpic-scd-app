export function score(answers, quizQs) {
  let s = 0;

  // Loops through each question in the quiz w/ its index
  quizQs.forEach((q, idx) => {
    // Checks if the user's answer is matches the correct index
    if (Number(answers[idx]) === q.correctIdx) s++;
  });
  // Returns the total score
  return s;
}