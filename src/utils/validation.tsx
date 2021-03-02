const validateSearch = (inputValue: string): boolean => {
  const regMatch = inputValue.match(
    /([a-zA-Zа-яёА-ЯЁ.\s]+\d+)|([a-zA-Zа-яёА-ЯЁ.\s]+[a-zA-Zа-яёА-ЯЁ.\s])/,
  );

  if (regMatch === null) {
    return false;
  }

  return true;
};

export const validateEmail = (inputValue: string): boolean => {
  const regMatch = inputValue.match(
    /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i,
  );
  if (regMatch === null) {
    return false;
  }

  return true;
};

export default validateSearch;
