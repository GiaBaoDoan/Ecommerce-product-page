const LeftMenu = ({
  setOpenMenu,
}: {
  setOpenMenu: (item: boolean) => void;
}) => {
  return (
    <div
      className={`fixed w-[200px] top-0 md:hidden left-0 bg-white h-full z-20`}
    >
      <div className="p-5">
        <button onClick={() => setOpenMenu(false)}>
          <img src="/images/icon-close.svg" alt="" />
        </button>
        <nav>
          <ul className="flex flex-col mt-10 gap-5">
            <li>
              <a className="text-gray-800 font-bold" href="#">
                Collections
              </a>
            </li>
            <li>
              <a className="text-gray-800 font-bold" href="#">
                Men
              </a>
            </li>
            <li>
              <a className="text-gray-800 font-bold" href="#">
                Women
              </a>
            </li>
            <li>
              <a className="text-gray-800 font-bold" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-800 font-bold" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LeftMenu;
