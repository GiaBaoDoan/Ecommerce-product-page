import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import LightBox from "./components/LightBox";
import LeftMenu from "./components/LeftMenu";

function App() {
  const [count, setCount] = useState<number>(0);
  const [close, setClose] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [addToCart, setToCart] = useState<boolean>(false);
  const handelIncreaseCount: () => void = () => {
    setCount(count + 1);
  };
  const handelDecreaseCount: () => void = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handelAddToCart = () => {
    if (count === 0 || addToCart) {
      handelIncreaseCount();
    } else {
      setToCart(true);
    }
    setToCart(true);
  };
  return (
    <div className="relative">
      {openMenu && (
        <>
          <LeftMenu setOpenMenu={setOpenMenu} />
          <div className="absolute z-10 bg-opacity-80 top-0 lef-0 w-full bg-black h-full"></div>
        </>
      )}
      <Header
        setOpenMenu={setOpenMenu}
        addToCart={addToCart}
        setClose={setClose}
        setCount={setCount}
        setToCart={setToCart}
        count={count}
      />
      <Product
        handelAddToCart={handelAddToCart}
        count={count}
        handelIncreaseCount={handelIncreaseCount}
        handelDecreaseCount={handelDecreaseCount}
      />
      {close && (
        <>
          <div className="absolute bg-opacity-80 top-0 lef-0 w-full bg-black h-full"></div>
          <LightBox setClose={setClose} />
        </>
      )}
    </div>
  );
}

export default App;
