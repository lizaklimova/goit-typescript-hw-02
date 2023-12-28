/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

const obj1: Pick<AllType, keyof AllType> = {
  name: "Object 1",
  position: 1,
  color: "Red",
  weight: 10,
};

const obj2: Pick<AllType, keyof AllType> = {
  name: "Object 2",
  position: 2,
  color: "Blue",
  weight: 20,
};

function compare<T extends AllType, K extends AllType>(
  top: Pick<T, keyof AllType>,
  bottom: Pick<K, keyof AllType>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export {};
