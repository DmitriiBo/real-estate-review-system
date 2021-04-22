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
    /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/i,
  );
  if (regMatch == null) {
    console.error(`errorFound at Email`);
    return false;
  }
  return true;
};

export const validatePhone = (inputValue: string): boolean => {
  const regMatch = inputValue.match(/^((\+7|7|8)+([0-9]){10})$/i);
  if (regMatch == null) {
    console.error(`errorFound at Phone`);
    return false;
  }
  return true;
};

export const validatePassword = (inputValue: string): boolean => {
  const regMatch = inputValue.match(
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i,
  );
  if (regMatch == null || inputValue.length < 8) {
    console.error(`errorFound at Password`);
    return false;
  }
  return true;
};

export default validateSearch;
