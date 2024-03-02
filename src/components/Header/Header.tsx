import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className="p-2">
      <div className=" flex justify-between items-center mt-2 text-slate-400 ">
        <p className="uppercase my-auto text-[4px] ">
          shipping to:sweden <br /> store locator
        </p>
        <img src="./assets/logo.PNG" className="w-7 " />
        <ShoppingBagIcon className="w-3 " />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
