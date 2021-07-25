//returns an array of objects after filtering according to the ingredient name
export const fitlerHelper = (array, filterName) => {
  return array
    .map(item => {
      return (
        item.ingredients.some(i => {
          return i.name.toLowerCase() === filterName;
        }) && item
      );
    })
    .filter(Boolean);
};

//takes in an array of objects as input with an _id field and returns an array where no duplicate objects are present
export const removeDuplicateHelper = array => {
  //remove duplicate objects from the array using sets
  const seen = new Set();
  const filteredArr = array.filter(element => {
    const duplicate = seen.has(element._id);
    seen.add(element._id);
    return !duplicate;
  });
  return filteredArr;
};

//another way to filter (not using)
// const filterHelperFunction1 = (arrayData, filterName) => {
//   const unsanitizedArray = arrayData.map(item => {
//     let a = item.ingredients.filter(i => {
//       if (i.name.toLowerCase().includes(filterName)) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     if (a.length > 0) {
//       return item;
//     }
//   });
//   const sanitizedArray = unsanitizedArray.filter(Boolean);
//   return sanitizedArray;
// };
