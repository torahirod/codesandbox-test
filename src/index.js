// /**
//  * アロー関数
//  */

// // 従来のやり方
// function fnc1(str) {
//   return str + "1111";
// }

// console.log(fnc1("abc"));

// // 変数に関数を入れることも可
// const fnc2 = function (str) {
//   return str + "222";
// };

// console.log(fnc2("cde"));

// // アロー関数
// const fnc3 = (str) => {
//   return str + "333";
// };

// console.log(fnc3("jkl"));

// // アロー関数
// // 引数が1つの場合、()がなくてもよい
// const fnc4 = (str) => {
//   return str + "444";
// };

// console.log(fnc4("opq"));

// // アロー関数
// // 処理が1行で終わり、それを返却するような場合は{}とreturn文は不要
// const fnc5 = (str) => str + "555";
// console.log(fnc5("xyz"));

// const fnc6 = (x, y) => {
//   return x + y;
// };

// console.log(fnc6(1, 2));

// /**
//  * 分割代入
//  */

// // 従来のやり方
// const myprof = {
//   name: "田中",
//   age: "23"
// };

// const mes1 = `私は${myprof.name}です。年齢は${myprof.age}です`;
// console.log(mes1);

// // 分割代入
// const { name, age } = myprof;
// const mes2 = `俺は${name}だ。${age}歳だよ`;
// console.log(mes2);

// // 配列でもできる
// const arr = ["佐藤", "50"];
// // 配列の順場に分割代入される
// const [name1, age1] = arr;

// const mes3 = `私は${name1}です。年齢は${age1}ですa`;
// console.log(mes3);

// /**
//  * デフォルト値
//  */
// // デフォルト値なしの場合
// const hel = (name) => console.log(`hello ${name}`);
// hel();

// const hel2 = (name = "ゲスト") => console.log(`hello ${name}`);
// hel2();
// hel2("aaa");

// /**
//  * スプレッド構文
//  */

// // 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (x, y) => console.log(x + y);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [n1, n2, ...n3] = arr2;

// console.log(n1);
// console.log(n2);
// console.log(n3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // コピー
// // ※ 要素を変更しても、コピー元の配列に影響なし
// const arr6 = [...arr4];
// console.log(arr6);

// // 結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = [50, 60];
// // コピーできていない例
// const arr9 = arr8;
// arr9[0] = -1;
// console.log(arr8);

// /**
//  * map や filter を使った配列処理
//  */
// // 従来のやり方
// const narr = ["あああ", "いいい", "ううう"];
// for (let idx = 0; idx < narr.length; idx++) {
//   console.log(narr[idx]);
// }

// // map
// const narr2 = narr.map((name) => {
//   return name;
// });

// console.log(narr2);

// narr.map((name) => console.log(name));

// // filter
// const narr3 = [1, 2, 3, 4, 5];
// const newarr = narr3.filter((n) => {
//   return n % 2 === 1;
// });

// console.log(newarr);

// // mapやfilterの場合、第二引数が要素の添え字を表す変数になる
// narr.map((name, i) => console.log(`${i + 1}番目は${name}です。`));

// const newarr2 = narr.map((name) => {
//   if (name === "いいい") {
//     return name;
//   } else {
//     return name + "さん";
//   }
// });

// console.log(newarr2);

/**
 * 三項演算子
 */
// 条件 ? Trueのとき : Falseのとき
const vall = 1 < 0 ? "Trueです" : "Falseです";
console.log(vall);

const num = "1300";

// 条件 ? Trueのとき : Falseのとき
const fnum = typeof num === "number" ? num.toLocaleString() : "数字以外です";
console.log(fnum);
