

  export interface Child {
    title: string;
    des: string;
    name: string;
  }

  export interface Category {
    name: string;
    childs: Child[];
  }

  export interface Data {
    categories: Category[];
  }

  export interface IHeader {
    data: Data;
  }



