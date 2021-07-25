const testArray = [
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
  {
    _id: '4',
    name: 'Pasta',
    imageUrl:
      'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    ingredients: [{name: 'Chilli Pepper', quantity: 1, unit: 'pcs'}],
    steps: ['First do rinse'],
  },
  {
    _id: '5',
    name: 'Soup',
    imageUrl:
      'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    ingredients: [{name: 'Soup', quantity: 200, unit: 'gm'}],
    steps: ['1st step'],
  },
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

module.exports = testArray;
