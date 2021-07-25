const testArray = require('../testDummyData');
const {
  fitlerHelper,
  removeDuplicateHelper,
} = require('../helpers/ArrayHelpers');

describe('filterArray', () => {
  it('should return array of objects where an ingredient name is equal to capsicum', () => {
    const expectedOutput = [
      {
        _id: '1',
        name: 'Pizza',
        imageUrl:
          'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        ingredients: [
          {name: 'Pizza Dough', quantity: 1, unit: 'pcs'},
          {name: 'Capsicum', quantity: 3, unit: 'kg'},
          {name: 'Flour', quantity: 1, unit: 'kg'},
          {name: 'Tomato', quantity: 3, unit: 'pcs'},
          {name: 'Mozzarella', quantity: 200, unit: 'gm'},
        ],
        steps: ['hi', 'what', 'yo', 'tespachi', 'idk', 'pizza', 'banyo'],
      },
    ];

    const result = fitlerHelper(testArray, 'capsicum');

    expect(result).toEqual(expect.arrayContaining(expectedOutput));
  });

  it('should return array of objects where an ingredient name is equal to salt', () => {
    const expectedOutput = [
      {
        steps: ['Make a coarse powder. Set this kadai masala aside.'],
        _id: '6',
        name: 'Mushroom',
        ingredients: [
          {
            _id: '60fc3597b44ec80034d1bba7',
            name: 'Mushroom',
            quantity: 1,
            unit: 'kg',
          },
          {
            _id: '60fc3597b44ec80034d1bba8',
            name: 'Salt',
            quantity: 2,
            unit: 'tbsp',
          },
        ],
        imageUrl:
          'http://bottletechrecipeapp.azurewebsites.net/uploads/imageUrl-161087010220027.jpg',
      },
    ];

    const result = fitlerHelper(testArray, 'salt');

    expect(result).toEqual(expect.arrayContaining(expectedOutput));
  });
  it('should return array of objects where an ingredient name is equal to Onion', () => {
    const expectedOutput = [
      {
        _id: '2',
        name: 'Momo',
        imageUrl:
          'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        ingredients: [
          {name: 'Onion', quantity: 3, unit: 'kg'},
          {name: 'Minced Meat', quantity: 1, unit: 'kg'},
          {name: 'Garlic', quantity: 3, unit: 'pcs'},
        ],
        steps: ['Wash', 'Clean', 'Fill', 'Steam', 'Eat'],
      },
      {
        _id: '3',
        name: 'Chowmien',
        imageUrl:
          'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        ingredients: [
          {name: 'Masala', quantity: 1, unit: 'pcs'},
          {name: 'Noodles', quantity: 1, unit: 'kg'},
          {name: 'Onion', quantity: 3, unit: 'pcs'},
          {name: 'Tomato', quantity: 200, unit: 'gm'},
        ],
        steps: ['Cook the noodles.'],
      },
    ];
    const result = fitlerHelper(testArray, 'onion');

    expect(result).toEqual(expect.arrayContaining(expectedOutput));
  });
});

it('should remove all duplicate objects inside an array based on _id in ascending order of array object', () => {
  const duplicateValuesArray = [
    {_id: 1},
    {_id: 2},
    {_id: 3},
    {_id: 1},
    {_id: 2},
  ];
  const expectedOutput = [{_id: 1}, {_id: 2}, {_id: 3}];

  const result = removeDuplicateHelper(duplicateValuesArray);
  expect(result).toStrictEqual(expectedOutput);
});
