import { ProductType } from "@/utils/types";
import { createContext, FC, ReactNode, useEffect, useState } from "react";

interface ShopProviderProps {
  children: ReactNode;
}

type ShopContextType = {
  toggleCart: boolean;
  onToggleCart: () => void;
  cart: ProductType[];
  addToCart: (product: ProductType, id: number) => void;
  removeFromCart: (id: number) => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  clearCart: () => void;
  itemAmount: number;
  total: number;
};

export const ShopContext = createContext({} as ShopContextType);

const ShopProvider: FC<ShopProviderProps> = ({ children }) => {
  const [toggleCart, setToggleCart] = useState<boolean>(false);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [itemAmount, setItemAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  // Update amount
  useEffect(() => {
    const amount = cart?.reduce(
      (accumulator, currentItem) => accumulator + currentItem.amount,
      0
    );

    const totalPrice = cart?.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.price * currentItem.amount,
      0
    );

    setItemAmount(amount);
    setTotal(totalPrice);
  }, [cart]);

  const onToggleCart = () => {
    setToggleCart((prev) => !prev);
  };

  // Add to cart
  const addToCart = (product: ProductType, id: number) => {
    const newItem = { ...product, amount: 1 };

    const checkCart = cart.find((item) => {
      return item.id === id;
    });

    if (checkCart) {
      const newCart = [...cart]?.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      setCart((prevCart) => [...prevCart, newItem]);
    }
  };

  // Remove from cart
  const removeFromCart = (id: number) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });

    setCart(newCart);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Increase amount
  const increaseAmount = (id: number) => {
    const product = cart.find((item) => item.id === id);
    addToCart(product as ProductType, id);
  };

  // Decrease amount
  const decreaseAmount = (id: number) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.amount > 0) {
          if (item.id === id) {
            return { ...item, amount: cartItem.amount - 1 };
          }
        }

        return item;
      });

      setCart(newCart);
    }

    if ((cartItem?.amount as number) < 2) {
      removeFromCart(id);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        toggleCart,
        cart,
        onToggleCart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
