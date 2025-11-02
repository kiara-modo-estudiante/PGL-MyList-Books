import React, { createContext, useState, useContext } from "react";
import { BookContextType, Book as BookType } from "@/types/book";
import { books as initialBooks } from "@/data/books";

/**
 * Context to manage the list of books and provide functionality
 * to delete a book. It is used to share state across the application.
 */
const BookContext = createContext<BookContextType>({
  books: initialBooks,
  deleteBook: () => {},
});

/**
 * Provides the `BookContext` to its children. It manages the state
 * of books and provides a method to delete books.
 *
 * @param children - React children components that will have access to the context.
 */
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

/**
 * Hook to access the `BookContext`. It provides the list of books
 * and the `deleteBook` function.
 *
 * @returns The current context value for books and deleteBook.
 */
export const useBookContext = () => useContext(BookContext);
