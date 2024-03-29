export interface BookToEditType {
  id?: string;
  title?: string;
  author?: string;
  image_url?: string;
  is_favorite?: boolean;
  category?: string;
  is_read?: boolean;
}

export interface FormDataType {
  title: string;
  author: string;
  image_url: File | string;
  category_name: string;
  is_read: string;
  is_favorite: string;
}

export type EditBookProps = {
  id: number;
  // newBook: Partial<BookToEditType>;
  newBook: Partial<FormDataType>;
};

export interface AddBookProps {
  id?: number;
  title: string;
  author: string;
  image_url: string | File;
  is_favorite: string;
  category_name: string;
  is_read: string;
}

export interface OptionProps {
  value: string;
  label: string;
}
