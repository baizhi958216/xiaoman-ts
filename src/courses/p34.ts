const p34 = () => {
  type Person = {
    name: string;
    age: number;
    text: string;
  };

  // Readonly: 传进来的类型全部转成readonly
  type Read<T> = {
    readonly [P in keyof T]: T[P];
  };

  type man = Read<Person>;
  type man1 = Readonly<Person>;

  // PropertyKey: string | number | symbol
  type Rec<K extends PropertyKey, T> = {
    [P in K]: T;
  };

  type key = "A" | "B" | "C";

  type man2 = Rec<key, Person>;

  let obj: man2 = {
    A: {
      name: "小满",
      age: 22,
      text: "真男人",
    },
    B: {
      name: "小满",
      age: 22,
      text: "真男人",
    },
    C: {
      name: "小满",
      age: 22,
      text: "真男人",
    },
  };
};
export { p34 };
