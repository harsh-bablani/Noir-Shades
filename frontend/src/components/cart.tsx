import { createContext, useContext, useState, type ReactNode } from "react";

type ShopContextType = {
  cart: any[];
  wishlist: any[];
  addToCart: (product: any) => void;
  addToWishlist: (product: any) => void;
};

const ShopContext = createContext<ShopContextType>({
  cart: [],
  wishlist: [],
  addToCart: () => {},
  addToWishlist: () => {},
});


export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);
  const [wishlist, setWishlist] = useState<any[]>([]);

  const addToCart = (product: any) => setCart((prev) => [...prev, product]);
  const addToWishlist = (product: any) => setWishlist((prev) => [...prev, product]);

  return (
    <ShopContext.Provider value={{ cart, wishlist, addToCart, addToWishlist }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);