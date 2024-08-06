import { Dispatch, SetStateAction } from "react";

const Cart = ({
  count,
  setCount,
  addToCart,
  setToCart,
}: {
  count: number;
  setToCart: (item: boolean) => void;
  addToCart: boolean;
  setCount: Dispatch<SetStateAction<number>>;
}) => {
  const removeCart: () => void = () => {
    setCount(0);
    setToCart(false);
  };
  return (
    <div className="absolute max-sm:left-0 sm:w-[400px] z-10 sm:right-0 px-5 w-full top-24">
      <div className="bg-white shadow-lg rounded-lg">
        <h3 className="font-bold text-xl p-5">Cart</h3>
        <hr />
        {(count === 0 || !addToCart) && (
          <p className="p-5 text-center text-lg min-h-[200px] items-center flex justify-center">
            Your cart is empty
          </p>
        )}
        {count > 0 && addToCart && (
          <>
            <div className="flex items-center justify-between p-5">
              <img
                className="w-14 rounded-lg"
                src="images/image-product-1-thumbnail.jpg"
                alt=""
              />
              <article>
                <p className="text-gray-500">Fall Limited Edition Sneakers</p>
                <p className="text-gray-500">
                  $125.00 x {count}{" "}
                  <strong className="text-black font-bold">
                    ${(125 * count).toFixed(2)}
                  </strong>
                </p>
              </article>
              <button onClick={removeCart}>
                <img src="images/icon-delete.svg" alt="" />
              </button>
            </div>
            <div className="p-5">
              <button className="bg-orange-500 p-3 rounded-lg font-bold w-full">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
