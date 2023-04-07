const p33 = () => {
  type Person = {
    name: string;
    age: number;
    text: string;
  };
  // Partial
  // 将类型全部变成可选
  type Partial<T> = {
    //keyof 把 key 变成了联合类型 type key = "name" | "age" | "text";
    [P in keyof T]?: T[P];
  };

  type p = Partial<Person>;

  // Pick
  // 筛选
  type q = Pick<Person, "age" | "name">;
};
export { p33 };
