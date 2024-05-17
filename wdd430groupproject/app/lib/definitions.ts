export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Product = {
  id: string;
  artisan_id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image_url: string;
  status: string;
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
