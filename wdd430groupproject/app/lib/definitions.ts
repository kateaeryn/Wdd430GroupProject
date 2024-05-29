export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  image_url: string;
};

export type Artisans = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  image_url: string;
};

export type Item = {
  id: string;
  artisan_id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image_url: string;
  status: string;
};

export type ArtisanList = {
  id: string;
  first_name: string;
  last_name: string;
};

export type ArtisanGrid = {
  id: string;
  first_name: string;
  last_name: string;
  image_url: string;
};

export type Product = {
  id: string; // Will be created on the database
  artisan_id: string;
  title: string;
  price: number; // Stored in cents
  category: string;
  description: string;
  image_url: string;
  status: "available" | "unavailable";
};

export type Review = {
  id: string;
  item_id: string;
  user_id: string;
  rate: number;
  date: Date;
  text: string;
};

export type ProductForm = {
  id: string;
  artisan_id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image_url: string;
  status: "available" | "unavailable";
};

export type ReviewForm = {
  id: string;
  text: string;
  rate: string;
  title: string;
}