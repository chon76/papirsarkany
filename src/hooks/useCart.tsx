import 'client-only';

import { CartItem } from '@/lib/types';
import { useCartStore } from '@/store/useCartStore';

/**
 * Functions to calculate derived values from [useCartStore](../store/useCartStore.ts) state.
 */
export default function useCart() {
  const cart = useCartStore((state) => state.cart);
  const shippingFeeAsNumber = useCartStore((state) =>
    typeof state.shippingFee === 'number' ? state.shippingFee : 0,
  );
  const billingFee = useCartStore((state) => state.billingFee);

  const isInCart = (itemToCheck: CartItem): boolean => {
    return cart.some(
      (cartItem) =>
        cartItem._id === itemToCheck._id && cartItem.name === itemToCheck.name,
    );
  };

  const getTotalPrice = (): number => {
    return (
      cart.reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0,
      ) +
      shippingFeeAsNumber +
      billingFee
    );
  };

  const getTotalItemCount = (): number => {
    return cart.reduce<number>((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
  };

  return {
    getTotalPrice,
    getTotalItemCount,
    isInCart,
  };
}