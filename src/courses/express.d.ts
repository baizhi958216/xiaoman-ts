declare module "express" {
  interface Router {
    get(path: string, cb: (req: any, res: any) => void): void;
  }
  interface App {
    use(path: string, router: Router): void;
    listen(port: number, cb?: () => void): void;
  }
  interface Express {
    (): App;
    Router(): Router;
  }
  const express: Express;
  export default express;
}

declare var a: number;

declare function xxx(params: any): void;

declare class Vue {}

declare enum C {
  a = 1,
}
