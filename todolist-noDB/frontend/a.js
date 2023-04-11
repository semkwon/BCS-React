const foods = [
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" },
  { type: "vegetable", name: "potato" },
  { type: "fruit", name: "kiwi" },
  { type: "vegetable", name: "tomato" },
  { type: "fruit", name: "orange" },
];
//
const onlyFruits = foods.filter((v, i) => {
  return v.type === "fruit";
});

//결과값은 넣어준 조건값(type)인 true, false
const mapFruits = foods.map((v, i) => {
  return v.type === "fruit";
});

const mapFruitsIf = foods.map((v, i) => {
  if (v.type === "fruits") {
    return v;
  }
});

console.log(onlyFruits);
console.log(mapFruits);
console.log(mapFruitsIf);
