import { faker } from '@faker-js/faker';

export const user = () => {
  const obj = {
    name: faker.name.findName(),
  };

  return obj;
};

export const collection = (fn, times = 3) => {
  const result = Array(times).fill(0).map(() => fn());
  return result;
};
