import type { Book } from "./book";

export interface ImplicitBookRecommendation {
  book: Book;
  predicted_rating: number;
  score: number | null | undefined;
}

export interface ImplicitBooksResponse {
  similar_books: ImplicitBookRecommendation[];
}