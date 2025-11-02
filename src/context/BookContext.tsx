import React, { createContext, useState, useContext } from "react";
import { BookContextType, Book as BookType } from "@/types/book";
import { books as initialBooks } from "@/data/books";

// Default value for context
const BookContext = createContext<BookContextType>({
  books: initialBooks,
  deleteBook: () => {},
});

export const BookProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [books, setBooks] = useState<BookType[]>(initialBooks);

  const deleteBook = (id: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
