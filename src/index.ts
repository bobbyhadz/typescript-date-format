export {};

// EXAMPLE 1 - Format Date/Time in TypeScript

// ✅ Using built-in methods
const date = new Date();

console.log(date.toLocaleString()); // 👉️ "7/31/2023, 5:38:01 PM"
console.log(date.toLocaleDateString()); // 👉️ "7/31/2023"
console.log(date.toLocaleTimeString()); // 👉️ "5:38:01 PM"

console.log(date.toUTCString()); // 👉️ "Mon, 31 Jul 2023 14:38:01 GMT"

// ---------------------------------------------------

// // EXAMPLE 2 - Defining a reusable function to format date and time

// // ✅ Defining a reusable function
// function padTo2Digits(num: number) {
//   return num.toString().padStart(2, '0');
// }

// // 👇️ format as "YYYY-MM-DD hh:mm:ss"
// // You can tweak the format easily
// function formatDate(date: Date) {
//   return (
//     [
//       date.getFullYear(),
//       padTo2Digits(date.getMonth() + 1),
//       padTo2Digits(date.getDate()),
//     ].join('-') +
//     ' ' +
//     [
//       padTo2Digits(date.getHours()),
//       padTo2Digits(date.getMinutes()),
//       padTo2Digits(date.getSeconds()),
//     ].join(':')
//   );
// }

// const result = formatDate(new Date());
// console.log(result); //  👉️ "2024-02-28 06:04:31"

// ---------------------------------------------------

// // EXAMPLE 3 - Built-in methods on the Date object

// const date = new Date();

// // 👇️ 7/31/2023, 5:40:28 PM
// console.log(date.toLocaleString());

// // 👇️ 7/31/2023
// console.log(date.toLocaleDateString());

// // 👇️ 5:40:28 PM
// console.log(date.toLocaleTimeString());

// // 👇️ Mon, 31 Jul 2023 14:40:28 GMT
// console.log(date.toUTCString());

// // 👇️ 2023-07-31
// console.log(new Date().toLocaleDateString('sv'));
