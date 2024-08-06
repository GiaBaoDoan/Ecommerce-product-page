import { Dispatch, SetStateAction, useState } from "react";

const LightBox = ({
  setClose,
}: {
  setClose: Dispatch<SetStateAction<boolean>>;
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
    <div className="fixed z-10 w-[32rem] max-sm:w-[80%] -translate-x-1/2 top-1/2 -translate-y-1/2 left-1/2">
      <div className="flex flex-col items-end w-full">
        <button onClick={() => setClose(false)} className="mb-5">
          <img src="/images/icon-close.svg" alt="" />
        </button>
        <div className="relative">
          <img
            className="rounded-lg "
            src={`/images/image-product-${activeIndex}.jpg`}
            alt=""
          />
          <button
            onClick={sildePre}
            className="w-10 h-10 top-1/2 -translate-y-1/2 absolute -translate-x-1/2 bg-white flex items-center justify-center rounded-full"
          >
            <img src="images/icon-previous.svg" alt="" />
          </button>
          <button
            onClick={slideNext}
            className="w-10 h-10 top-1/2 -translate-y-1/2 right-0 absolute translate-x-1/2 bg-white flex items-center justify-center rounded-full"
          >
            <img src="images/icon-next.svg" alt="" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:gap-10 mt-5">
          {[...Array(4).keys()].map((i) => {
            i = i + 1;
            const check = activeIndex === i;
            return (
              <button
                className={`${
                  check && "btn"
                } overflow-hidden border-4 relative border-transparent rounded-lg`}
                onClick={() => setActiveIndex(i)}
              >
                <img
                  className={` ${check} hover:bg-white  object-cover  cursor-pointer`}
                  src={`images/image-product-${i}-thumbnail.jpg`}
                  alt=""
                />
                <div className={`${check && "overlay"}`}></div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LightBox;
