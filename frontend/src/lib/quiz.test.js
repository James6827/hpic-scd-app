import { describe, it, expect } from "vitest";
import { score } from "./quiz.js";

// Defines quiz questions as an array
const quizQs = [
  { correctIdx: 1 }, // Q1: correct answer is at index 1
  { correctIdx: 0 }, // Q2: correct answer is at index 0
  { correctIdx: 1 } // Q3: correct answer is at index 1
];

describe("quiz scoring", () => {
  it("gives full marks when all answers are correct", () => {
    const answers = { 0: 1, 1: 0, 2: 1 };
    // return 3 (for full marks)
    expect(score(answers, quizQs)).toBe(3);
  });

  it("gives partial marks when some answers are wrong", () => {
    const answers = { 0: 0, 1: 0, 2: 1 };
    // return 2 (2/3 answers correct)
    expect(score(answers, quizQs)).toBe(2);
  });
});
