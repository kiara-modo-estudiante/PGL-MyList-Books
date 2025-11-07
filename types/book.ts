import { ImageSourcePropType } from "react-native";

/**
 * Represents the different categories a book can belong to.
 */
export enum Category {
  Academic = "Academic",
  Classic = "Classic",
  Cooking = "Cooking",
  Crime = "Crime",
  Drama = "Drama",
  Fantasy = "Fantasy",
  Finance = "Finance",
  History = "History",
  Horror = "Horror",
  Romance = "Romance",
  SciFi = "Sci-Fi",
  SelfHelp = "Self-Help",
}

/**
 * Maps each book category to its corresponding image file.
 */
export const CategoryImages: Record<Category, ImageSourcePropType> = {
  [Category.Academic]: require("../assets/images/categories/academic.png"),
  [Category.Classic]: require("../assets/images/categories/classic.png"),
  [Category.Cooking]: require("../assets/images/categories/cooking.png"),
  [Category.Crime]: require("../assets/images/categories/crime.png"),
  [Category.Drama]: require("../assets/images/categories/drama.png"),
  [Category.Fantasy]: require("../assets/images/categories/fantasy.png"),
  [Category.Finance]: require("../assets/images/categories/finance.png"),
  [Category.History]: require("../assets/images/categories/history.png"),
  [Category.Horror]: require("../assets/images/categories/horror.png"),
  [Category.Romance]: require("../assets/images/categories/romance.png"),
  [Category.SciFi]: require("../assets/images/categories/scifi.png"),
  [Category.SelfHelp]: require("../assets/images/categories/selfhelp.png"),
};

/**
 * Represents a book with its details.
 */
export interface BookType {
  id: string;
  cover?: ImageSourcePropType;
  title: string;
  author: string;
  category: Category;
  yearPublished: number; // Year
  price: number; // Money
  isRead: boolean;
}

export interface BookListProps {
  books: BookType[];
  deleteBook: (id: string) => void;
  toggleReadStatus: (id: string) => void;
}

export interface BookContextType {
  books: BookType[];
  deleteBook: (id: string) => void;
}
