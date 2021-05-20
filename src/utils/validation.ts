const validateSearch = (inputValue: string): boolean => {
  const regMatch = inputValue.match(
    /([a-zA-Zа-яёА-ЯЁ.\s]+\d+)|([a-zA-Zа-яёА-ЯЁ.\s]+[a-zA-Zа-яёА-ЯЁ.\s])/,
  );
  return regMatch !== null;
};

export const validateEmail = (inputValue: string): boolean => {
  const regMatch = inputValue.match(
    /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/i,
  );
  return regMatch != null;
};

export const validatePhone = (inputValue: string): boolean => {
  const regMatch = inputValue.match(/^((\+7|7|8)+([0-9]){10})$/i);
  return regMatch != null;
};

export const validatePassword = (inputValue: string): boolean => {
  const regMatch = inputValue.match(
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i,
  );
  return !(regMatch == null || inputValue.length < 8);
};

export default validateSearch;
