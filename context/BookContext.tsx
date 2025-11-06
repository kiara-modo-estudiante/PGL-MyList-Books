import React, { createContext, useState, useContext } from "react";
import { BookType } from "@/types/book";
import { books as booksData } from "@/data/books";

interface BookContextProps {
  books: BookType[];
  addBook: (book: BookType) => void;
  deleteBook: (id: string) => void;
  toggleReadStatus: (id: string) => void;
}

const BookContext = createContext<BookContextProps | undefined>(undefined);

export const BookProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [books, setBooks] = useState<BookType[]>(booksData);

  const addBook = (book: BookType) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const deleteBook = (id: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const toggleReadStatus = (id: string) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

  return (
    <BookContext.Provider
      value={{ books, addBook, deleteBook, toggleReadStatus }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBookContext must be used within a BookProvider");
  }
  return context;
};
