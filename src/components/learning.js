// working on Array Destructuring and spred operator
const fruits = ["apple", "banana", "grapes", "orange"];
const teams = ["liverpool", "real madrid", "chelse", "city"];

const [fruit1, fruit2, ...rest] = fruits;
console.log(fruit1, fruit2, ...rest);

const result = [...fruits, ...teams];
console.log("result :", result);

const arthmetic = (a, b) => {
  return [a + b, a * b, a / b];
};
const [a, b, z = "Division"] = arthmetic(2, 3);
console.log("Arthmetic result :", a, b, z);

// End of working on Array Destructuring and spred operator
