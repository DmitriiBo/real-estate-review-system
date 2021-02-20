const validateSearch = (inputValue: string): string => {
  const regMatch = inputValue.match(/(\w.+\s\d+)|([a-z]+|[a-z]+\s[a-z]+)/);

  if (regMatch === null) {
    return 'Data is Invalid';
  }
  return 'ok';
};

export default validateSearch;
