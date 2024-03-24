export interface BookToEditType {
  id?: string;
  title?: string;
  author?: string;
  image_url?: string;
  is_favorite?: boolean;
  category?: string;
  is_read?: boolean;
}

export type EditBookProps = {
  id: number;
  newBook: Partial<BookToEditType>;
};

export type AddBookProps = {
  title: string;
  author: string;
  image_url: string;
  is_favorite: boolean;
  category: string;
  is_read: boolean;
};
