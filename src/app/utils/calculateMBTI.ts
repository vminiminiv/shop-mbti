import { Answers } from '../types/quiz';

export function calculateMBTI(answers: Answers): string {
  // E/I
  const eCount = [1, 2, 3].filter(q => answers[q] === 'A').length;
  const firstLetter = eCount >= 2 ? 'E' : 'I';

  // S/N
  const nCount = [4, 5, 6].filter(q => answers[q] === 'A').length;
  const secondLetter = nCount >= 2 ? 'N' : 'S';

  // T/F
  const tCount = [7, 8, 9].filter(q => answers[q] === 'A').length;
  const thirdLetter = tCount >= 2 ? 'T' : 'F';

  // J/P
  const pCount = [10, 11, 12].filter(q => answers[q] === 'A').length;
  const fourthLetter = pCount >= 2 ? 'P' : 'J';

  return `${firstLetter}${secondLetter}${thirdLetter}${fourthLetter}`;
} 