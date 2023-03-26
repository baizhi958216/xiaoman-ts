const p17 = () => {
  /* 
    // 泛型\动态类型, T只是占位(意思是Type, 常用)
    function xiaoman<S>(a: S, b: S): Array<S> {
        return [a, b];
    }
    xiaoman(1, 2);
    xiaoman("1", "2");
    xiaoman(true, false);

    // 支持多个
    function add<T, K>(a: T, b: K): Array<T | K> {
        return [a, b];
    }
    add("1", 2);
    add("1", false);

    // 带默认值
    function add1<T = number, K = string>(a: T, b: K): Array<T | K> {
        return [a, b];
    }
    add("1", 2);
    add1(1, 2);

    // type
    type A<T> = string | number | T;
    let a: A<undefined>;

    // interface
    interface Data<T> {
        msg: T;
    }
    let data: Data<string> = {
        msg: "小满无了",
    };
    let data1: Data<number> = {
        msg: 1,
    };

    // 调接口用泛型比较多
    const axios = {
        // 使用泛型, 后面调用可以有提示
        get<T>(url: string): Promise<T> {
        return new Promise((resolve, reject) => {
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(JSON.parse(xhr.responseText));
            }
            };
            xhr.send(null);
        });
        },
    };
    interface Data1 {
        message: string;
        code: number;
    }
    // axios.get<Data1>("../data/data.json").then((res) => {
    //   res.message;
    // }); 
  */
};
export { p17 };
