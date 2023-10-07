export interface Book {
  author: string;
  title: string;
}

export interface PrintedBook extends Book {
  pages: number;
}
