import { useShop } from '../components/cart'; // Adjust the import path as necessary

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  image: string;
  isNew: boolean;
};

type ProductCartProps = {
  item: Product;
};

const ProductCart = ({ item }: ProductCartProps) => {
  const { addToCart, addToWishlist } = useShop();

  return (
    <>
      <button onClick={() => addToCart(item)}>Add to cart</button>
      <button onClick={() => addToWishlist(item)}>♥</button>
    </>
  );
};

export default ProductCart;
