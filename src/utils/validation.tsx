/* eslint-disable @typescript-eslint/no-explicit-any */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const validateSearch = (inputValue: any): any => {
  const regMatch = inputValue.match(
    /([a-zA-Zа-яёА-ЯЁ.\s]+\d+)|([a-zA-Zа-яёА-ЯЁ.\s]+[a-zA-Zа-яёА-ЯЁ.\s])/,
  );

  if (regMatch === null) {
    return console.log('Data is Invalid');
  }
  return console.log('ok');
};

export default validateSearch;
