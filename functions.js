const identity = function (value) {
  return value;
};

const indexOf = function (array, target) {
  //array = [1], target = 1
  var result = -1;

  each(array, function (item, index) {
    //item = 1
    if (item === target && result === -1) {
      result = index;
      //result = 1
    }
  });

  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const map = function (collection, iterator) {
  var result = [];

  each(collection, function (element) {
    result.push(iterator(element));
  });

  return result;
};

const filter = function (collection, callback) {
  let arr = [];

  each(collection, function (element) {
      if (callback(element)) {
        arr.push(element)
      }
    })
    return arr;
  }

const reject = function (collection, callback) {
  let arr = [];

  each(collection, function (element) {
    if (!callback(element)){
      arr.push(element)
    }
  }
)
    return arr;

    // return filter(collection, function (value){
    //   return !callback(value);
    // })
};

const uniq = function (array) {
  let arr = [];

indexOf(array,)
};
// const indexOf = function (array, target) {
//   //array = [1], target = 1
//   var result = -1;

//   each(array, function (item, index) {
//     //item = 1
//     if (item === target && result === -1) {
//       result = index;
//       //result = 1
//     }
//   });

//   return result;
// };
const reduce = function (collection, callback, accumulator) {
  
};

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
