
  export interface Child {
    name: string;
    description: string;
  }

  export interface Category {
    header: string;
    childs: Child[];
    name: string;
  }

  export interface Data {
    categories: Category[];
  }

  export interface IHeader {
    data: Data;
  }

