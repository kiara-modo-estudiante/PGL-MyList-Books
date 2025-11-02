import React, { createContext, useState, useContext } from "react";
import { BookContextType, Book as BookType } from "@/types/book";
import { books as initialBooks } from "@/data/books";

// Undefined default so TypeScript can catch misuse
const BookContext = createContext<BookContextType | undefined>(undefined);

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

// Custom hook for using the context safely
export const useBookContext = (): BookContextType => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBookContext must be used within a BookProvider");
  }
  return context;
};
