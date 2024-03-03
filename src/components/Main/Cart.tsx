const products = [
  {
    idx: 1,
    name: "EC-GO Bag Standard",
    desc: "1 WeekSubscription",
    imageSrc: "/assets/product-1.PNG",
    quantity: 2,
    price: 179,
  },
  {
    idx: 2,
    name: "EC-GO Low Sugar Bag",
    desc: "2 WeekSubscription",
    imageSrc: "/assets/product-2.PNG",
    quantity: 3,
    price: 179,
  },
  {
    idx: 3,
    name: "EC-GO Tryout low Bag",
    desc: "2 WeekSubscription",
    imageSrc: "/assets/product-3.PNG",
    quantity: 2,
    price: 179,
  },
];

const Cart = () => {
  return (
    <ul>
      {products.map((product) => (
        <li
          className="flex justify-between mt-2 text-[4.5px]  items-center border-b pb-2 "
          key={product.idx}
        >
          <div className="flex gap-x-5 ">
            <img src={product.imageSrc} className="w-20" />

            <div className=" pt-8 md:pt-5">
              <p className="font-semibold text-[8px] md:text-[12px]">
                {product.name}
              </p>
              <p className=" text-gray-600 text-[5px] md:text-[10px]">
                {product.desc}
              </p>
            </div>
          </div>

          <p
            className={`rounded-sm p-1 text-[8px] md:text-[15px] ${product.quantity === 3 ? `bg-[#52c5b2] p-1.5  text-white` : `border border-slate-300`} p-1.5`}
          >
            {product.quantity}
          </p>

          <p className="font-bold text-[8px] md:text-[15px]">
            {product.price} SEK
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Cart;
