const isEqual = (param1, param2) => {
  if (typeof param1 != "object" || typeof param2 != "object") {
    return param1 === param2;
  } else {
    //param1 and param2 are same object type

    //check type array with length
    if (
      Array.isArray(param1) &&
      Array.isArray(param2) &&
      param1.length != param2.length
    ) {
      return false;
    }

    var equal = false;
    for (var index in param1) {
      if (param2[index] != null) {
        equal = isEqual(param1[index], param2[index]);
      } else {
        equal = false;
      }

      if (!equal) {
        break;
      }
    }

    return equal;
  }
};

//const val1 = [{ age: 10 }, { age: 20 }, { age1: 30 }];
//const val2 = [{ age: 10 }, { age: 20 }, { age: 30 }];

const val1 = [1, 2, 3];
const val2 = [1, 2, 3];
const result = isEqual(val1, val2);
console.log(result);
console.log(val1 === val2);
