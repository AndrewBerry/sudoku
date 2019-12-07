import { getSudoku } from "fake-sudoku-puzzle-generator";
import { createPRNGGenerator } from "./prng";

const difficulties = [
  "VeryEasy",
  "Easy",
  "Medium",
  "Hard"
]

export function generatePuzzle(difficultyIndex) {
  const originalMathRandom = Math.random;
  Math.random = createPRNGGenerator(20191207);
  const puzzle = getSudoku(difficulties[difficultyIndex]);
  Math.random = originalMathRandom;

  return puzzle.map(
    row => row.map(value => ({
      value: !value ? null : `${value}`,
      candidates: {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
        "9": false,
      },
      isReadOnly: value !== null,
    }))
  );
}