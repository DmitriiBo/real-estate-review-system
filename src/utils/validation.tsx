const validateSearch = (inputValue: string): boolean => {
  const regMatch = inputValue.match(
    /([a-zA-Zа-яёА-ЯЁ.\s]+\d+)|([a-zA-Zа-яёА-ЯЁ.\s]+[a-zA-Zа-яёА-ЯЁ.\s])/,
  );

  if (regMatch === null) {
    return false;
  }

  return true;
};

export default validateSearch;
