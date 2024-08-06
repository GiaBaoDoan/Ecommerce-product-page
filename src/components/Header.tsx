import { Dispatch, SetStateAction, useState } from "react";
import Cart from "./Cart";

const Header = ({
  count,
  setCount,
  addToCart,
  setClose,
  setToCart,
  setOpenMenu,
}: {
  count: number;
  addToCart: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
  setToCart: (item: boolean) => void;
  setOpenMenu: (item: boolean) => void;
  setCount: Dispatch<SetStateAction<number>>;
}) => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  return (
    <header className="max-width flex justify-between relative max-sm:py-5 py-10 border-b border-gray-200">
      <div className="flex gap-10 items-center">
        <div className="flex items-center gap-5">
          <button onClick={() => setOpenMenu(true)} className="md:hidden">
            <img src="/images/icon-menu.svg" alt="" />
          </button>
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <nav className="max-md:hidden">
          <ul className="flex gap-5">
            <li>
              <a className="text-gray-500 active-link" href="#">
                Collections
              </a>
            </li>
            <li>
              <a className="text-gray-500 active-link" href="#">
                Men
              </a>
            </li>
            <li>
              <a className="text-gray-500 active-link" href="#">
                Women
              </a>
            </li>
            <li>
              <a className="text-gray-500 active-link" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-500 active-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-10 max-sm:gap-5 relative">
        <button onClick={() => setOpenCart(!openCart)} className="relative">
          <img src="images/icon-cart.svg" alt="cart" />
          {count > 0 && addToCart && (
            <span className="count absolute top-1 -right-3 px-2 text-xs rounded-full text-white font-bold py-0 bg-orange-400 ">
              {count}
            </span>
          )}
        </button>
        <button
          onClick={() => setClose(true)}
          className="border-2 hover:border-orange-400 border-transparent rounded-full"
        >
          <img
            className="w-10 max-sm:w-8"
            src="images/image-avatar.png"
            alt="avatar"
          />
        </button>
      </div>
      {openCart && (
        <Cart
          setToCart={setToCart}
          addToCart={addToCart}
          setCount={setCount}
          count={count}
        />
      )}
    </header>
  );
};

export default Header;
