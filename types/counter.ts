import { BookType } from "./book";

export interface CounterProps {
  counterLabel: string;
  counterValue: string;
}

export interface CounterRowProps {
  bookList: BookType[];
}
