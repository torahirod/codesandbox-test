/**
 * アロー関数
 */

// 従来のやり方
function fnc1(str) {
  return str + "1111";
}

console.log(fnc1("abc"));

// 変数に関数を入れることも可
const fnc2 = function (str) {
  return str + "222";
};

console.log(fnc2("cde"));

// アロー関数
const fnc3 = (str) => {
  return str + "333";
};

console.log(fnc3("jkl"));

// アロー関数
// 引数が1つの場合、()がなくてもよい
const fnc4 = (str) => {
  return str + "444";
};

console.log(fnc4("opq"));

// アロー関数
// 処理が1行で終わり、それを返却するような場合は{}とreturn文は不要
const fnc5 = (str) => str + "555";
console.log(fnc5("xyz"));

const fnc6 = (x, y) => {
  return x + y;
};

console.log(fnc6(1, 2));
