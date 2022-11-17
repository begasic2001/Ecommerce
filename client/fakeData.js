import { faker } from '@faker-js/faker';
import fs from 'fs';

faker.setLocale('vi');

const generateBrandList = (n) => {
  if (n <= 0) return [];

  const brandList = [];

  Array.from(new Array(n)).forEach(() => {
    const brandItem = {
      id: faker.datatype.uuid(),
      name: faker.company.name(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    brandList.push(brandItem);
  });

  return brandList;
};

const generateCategoryList = (n) => {
  if (n <= 0) return [];

  const categoryList = [];

  Array.from(new Array(n)).forEach(() => {
    const categoryItem = {
      id: faker.datatype.uuid(),
      name: faker.commerce.product(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    categoryList.push(categoryItem);
  });

  return categoryList;
};

const generateSubCategoryList = (categoryList, n) => {
  if (n <= 0) return [];

  const subCategoryList = [];

  for (let categoryItem of categoryList) {
    Array.from(new Array(n)).forEach(() => {
      const subCategoryItem = {
        id: faker.datatype.uuid(),
        categoryId: categoryItem.id,
        name: faker.commerce.product(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      subCategoryList.push(subCategoryItem);
    });
  }

  return subCategoryList;
};

const generateProductList = (brandList, categoryList, subCategoryList, n) => {
  if (n <= 0) return [];

  const productList = [];

  for (let brandItem of brandList) {
    for (let categoryItem of categoryList) {
      for (let subCategoryItem of subCategoryList) {
        Array.from(new Array(n)).forEach(() => {
          const price = faker.datatype.number({ min: 100000, max: 10000000 });
          const newPrice = faker.datatype.number({ min: price - 500000, max: price });

          const productItem = {
            id: faker.datatype.uuid(),
            brandId: brandItem.id,
            categoryId: categoryItem.id,
            subCategoryId: subCategoryItem.id,
            name: faker.commerce.productName(),
            code: faker.datatype.uuid(),
            amount: faker.datatype.number({ min: 0, max: 1000 }),
            detail: faker.lorem.paragraph(),
            price,
            newPrice,
            color: [
              faker.color.human(),
              faker.color.human(),
              faker.color.human(),
              faker.color.human(),
            ],
            size: faker.datatype.number({ min: 1, max: 100 }),
            images: [
              faker.image.imageUrl(500, 500),
              faker.image.imageUrl(500, 500),
              faker.image.imageUrl(500, 500),
            ],
            hotTrend: faker.datatype.boolean(),
            new: faker.datatype.boolean(),
            createdAt: Date.now(),
            updatedAt: Date.now(),
          };

          productList.push(productItem);
        });
      }
    }
  }

  return productList;
};

(() => {
  const brandList = generateBrandList(3);
  const categoryList = generateCategoryList(3);
  const subCategoryList = generateSubCategoryList(categoryList, 3);
  const productList = generateProductList(brandList, categoryList, subCategoryList, 3);

  const db = {
    brands: brandList,
    categories: categoryList,
    subCategories: subCategoryList,
    products: productList,
  };

  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate fake data successfully :))');
  });
})();
