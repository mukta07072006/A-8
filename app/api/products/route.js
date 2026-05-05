import { products } from '@/app/api/products';

export default function handler(req, res) {
  res.status(200).json(products);
}