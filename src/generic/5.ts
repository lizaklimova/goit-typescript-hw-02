/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, U> {
  key: T;
  value: U;
}

const pair1: KeyValuePair<string, boolean> = { key: "str", value: true };
const pair2: KeyValuePair<string, number> = { key: "num", value: 5 };

export {};
