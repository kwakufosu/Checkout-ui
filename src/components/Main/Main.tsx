import Cart from "./Cart";
import Cost from "./Cost";
import PaymentDetails from "./PaymentDetails";
import ShippingDetails from "./ShippingDetails";

const Main = () => {
  return (
    <main className=" max-w-[80%] mx-auto mt-6 md:grid gap-x-24 md:grid-cols-2 ">
      <div>
        <p className="font-semibold text-[30px]">Checkout</p>
        <ShippingDetails />
        <PaymentDetails />
      </div>
      <div>
        <p className="uppercase  text-gray-600 py-1 mt-9 border-b text-[30px] font-light">
          {" "}
          Your order <span className="text-[15px]">Edit shopping bag</span>
        </p>

        <Cart />
        <Cost />
      </div>
    </main>
  );
};

export default Main;
