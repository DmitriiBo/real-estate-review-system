function getResultWord(resultsCount: number, words: string[]): string {
  const modulo = Math.abs(resultsCount) % 100;
  const num = modulo % 10;
  const [string1, string2, string3] = words;
  let resultWord: string;

  if (modulo > 10 && modulo < 20) {
    resultWord = string3;
  } else if (num > 1 && num < 5) {
    resultWord = string2;
  } else if (num === 1) {
    resultWord = string1;
  } else {
    resultWord = string3;
  }

  return `${resultsCount} ${resultWord}`;
}

export default getResultWord;
