import realEstateApi from '../../utils/RealEstateApi';

export const sentAuth = async (email: string, password: string) => {
  await realEstateApi.postData('signin', {
    body: { email, password },
  });
};

export const sentRegister = (email: string, password: string, name: string) => {
  return realEstateApi.postData('register', {
    body: {
      email,
      password,
      name,
    },
  });
};
