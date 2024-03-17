import { faker } from "@faker-js/faker";

const generateCategory = () => {
  return {
    category: faker.commerce.product(),
  };
};

export const generateCategoryMultiple = (length) => {
  let category = [];
  console.log(category);
  for (let i = 0; i < length; i++) {
    category.push(generateCategory());
  }

  return category;
};
