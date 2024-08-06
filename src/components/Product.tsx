import { useState } from "react";

const Product = ({
  handelIncreaseCount,
  handelDecreaseCount,
  handelAddToCart,
  count,
}: {
  count: number;
  handelAddToCart: () => void;
  handelIncreaseCount: () => void;
  handelDecreaseCount: () => void;
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
    if (activeIndex > 3) {
      return setActiveIndex(1);
    }
  };
  const sildePre = () => {
    setActiveIndex(activeIndex - 1);
    if (activeIndex < 2) {
      return setActiveIndex(4);
    }
  };
  return (
    <section className="max-width sm:!pt-10 sm:!p-10 pb-10 !p-0 grid grid-cols-2 place-items-center gap-20 max-lg:gap-5 max-lg:flex flex-col">
      <div>
        <div className="relative">
          <img
            className="main-product cursor-pointer rounded-lg max-sm:rounded-none h-1/2"
            src={`images/image-product-${activeIndex}.jpg`}
            alt=""
          />
          <div className="md:hidden">
            <button
              onClick={sildePre}
              className="w-10 h-10 top-1/2 -translate-y-1/2 absolute translate-x-1/2 bg-white flex items-center justify-center rounded-full"
            >
              <img src="images/icon-previous.svg" alt="" />
            </button>
            <button
              onClick={slideNext}
              className="w-10 h-10 top-1/2 -translate-y-1/2 right-0 absolute -translate-x-1/2  bg-white flex items-center justify-center rounded-full"
            >
              <img src="images/icon-next.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 max-sm:hidden gap-10 mt-10">
          {[...Array(4).keys()].map((i) => {
            i = i + 1;
            const check = activeIndex === i;
            return (
              <button
                className={`${
                  check && "btn"
                } overflow-hidden border-4 border-transparent relative rounded-lg`}
                onClick={() => setActiveIndex(i)}
              >
                <img
                  className={` ${check} hover:opacity-40  cursor-pointer`}
                  src={`images/image-product-${i}-thumbnail.jpg`}
                  alt=""
                />
                {check && <div className="overlay"></div>}
              </button>
            );
          })}
        </div>
      </div>
      <div className="max-sm:!p-5">
        <article>
          <span className="font-bold text-xl max-sm:text-base tracking-widest uppercase text-gray-600">
            Sneaker Company
          </span>
          <h1 className="text-5xl max-sm:text-3xl font-bold mt-3">
            Fall Limited Edition Sneakers
          </h1>
          <p className="mb-5 mt-5 text-gray-500 font-medium">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex gap-5 mb-3 items-end justify-between">
            <div className="flex gap-5 items-end">
              <span className="font-bold text-3xl text-gray-800">$125.00</span>
              <span className="bg-gray-800 rounded-lg  text-sm py-1 px-2 text-white">
                50%
              </span>
            </div>
            <s className="font-bold sm:hidden text-gray-500 text-lg">$250.00</s>
          </div>
          <s className="font-bold max-sm:hidden text-gray-500 text-lg">
            $250.00
          </s>
        </article>
        <div className="mt-10 flex gap-5  max-sm:flex-col ">
          <div className="p-5 bg-slate-100 flex basis-1/3 justify-between rounded-lg">
            <button onClick={handelDecreaseCount}>
              <img src="images/icon-minus.svg" alt="" />
            </button>
            <span className="font-bold text-lg">{count}</span>
            <button onClick={handelIncreaseCount}>
              <img src="images/icon-plus.svg" alt="" />
            </button>
          </div>
          <div
            onClick={handelAddToCart}
            className="p-5 bg-orange-500 hover:bg-orange-400 cursor-pointer flex-1 gap-5 flex items-center justify-center rounded-lg"
          >
            <img src="images/icon-cart-black.svg" alt="" />
            <span className="font-bold text-lg">Add to cart</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
