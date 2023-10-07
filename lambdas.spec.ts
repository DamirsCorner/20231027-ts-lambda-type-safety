import { describe, expect, test } from "@jest/globals";
import { Book, PrintedBook } from "./types";

const books: Array<Book> = [
  {
    author: "Mark J. Price",
    title: "Apps and Services with .NET 7",
  },
  {
    author: "Carl-Hugo Marcotte",
    title: "An Atypical ASP.NET Core 6 Design Patterns Guide",
  },
];

describe("lambdas", () => {
  test("disallow more specific types as parameters", () => {
    // Property 'pages' is missing in type 'Book' but required in type 'PrintedBook'.
    // const longBooks = books.filter((book: PrintedBook) => book.pages > 700);
    const longTitles = books.filter((book: Book) => book.title.length > 30);

    expect(longTitles.length).toBe(1);
  });

  test("more specific types disallowed with implicit types", () => {
    // Property 'pages' does not exist on type 'Book'.
    // const longBooks = books.filter((book) => book.pages > 700);
    const longTitles = books.filter((book) => book.title.length > 30);

    expect(longTitles.length).toBe(1);
  });
});
