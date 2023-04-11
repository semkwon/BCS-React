const fruits = ["apple", "banana", "kiwi", "orange", "melon"];
console.log(fruits);

//다섯글자 이상만 빼기
const moreThanFiveLetters = fruits.filter((v, i) => {
  return v.length >= 5;
});

console.log(moreThanFiveLetters);
