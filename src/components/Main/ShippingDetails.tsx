const ShippingDetails = () => {
  return (
    <>
      {" "}
      <p className="uppercase text-[30px] text-gray-600 py-1 mt-3 border-b">
        {" "}
        Shipping Details
      </p>
      <div className="flex text-[12px] md:text-[15px] justify-between font-semibold">
        <p>
          Daniel Hecker <br />
          Vasagatan 16 <br />
          111 20 Stockholm
          <br />
          Sweden
        </p>

        <p>daniel@bambora.com</p>
      </div>
    </>
  );
};

export default ShippingDetails;
