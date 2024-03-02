import Cart from "./Cart";
import Cost from "./Cost";
import PaymentDetails from "./PaymentDetails";
import ShippingDetails from "./ShippingDetails";

const Main = () => {
  return (
    <main className="min-w-[90%] mx-auto grid gap-x-24 grid-cols-2 mt-6">
      <div>
        <h2>Checkout</h2>
        <ShippingDetails />
        <PaymentDetails />
      </div>
      <div>
        <p className="uppercase text-[8px] text-gray-600 py-1 mt-9 border-b">
          {" "}
          Your order <span className="text-[5px]">Edit shopping bag</span>
        </p>

        <Cart />
        <Cost />
      </div>
    </main>
  );
};

export default Main;
