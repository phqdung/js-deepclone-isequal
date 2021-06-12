const deepClone = (param) => {
  if (typeof param != "object") {
    return param;
  } else {
    let result = null;
    if (Array.isArray(param)) {
      result = [...param];
    } else {
      result = { ...param };
    }

    for (var index in param) {
      if (typeof param[index] == "object") {
        result[index] = deepClone(param[index]);
      }
    }
    return result;
  }
};

const deepClone2 = (param) => {
  return JSON.parse(JSON.stringify(param));
};

//number, string, undefined, boolean
//object: object, null, array

// const value = { name: 1 };
// const value = {
//   name: "David",
//   address: {
//     position: "123/4",
//     street: "Pham Ngu Lao",
//     city: "HCM",
//   },
// };

// const value = [{ age: 19 }, { age: 20 }, { age: 30 }];
const value = [
  {
    age: 19,
    address: {
      position: "123/4",
      street: "Pham Ngu Lao",
      city: "HCM",
      test: {
        kaka: 1,
      },
    },
  },
  {
    age: 20,
    address: {
      position: "123/4",
      street: "Pham Ngu Lao",
      city: "HCM",
    },
  },
  {
    age: 30,
    address: {
      position: "123/4",
      street: "Pham Ngu Lao",
      city: "HCM",
    },
  },
];
console.log(typeof value);
const clone = deepClone2(value);

value[0].address.test.kaka = 2;
console.log("value: ", value);
console.log("clone: ", clone);
console.log(clone[0].address.test.kaka);
console.log(value[0].address.test.kaka);
console.log(value === clone);
