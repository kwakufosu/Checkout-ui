import Button from "../ui/Button";
const Form = () => {
  return (
    <form className="uppercase text-[8px] text-gray-600 ">
      <div className="grid grid-rows-2 ">
        <label htmlFor="cardName" className="pt-3">
          Name on card
        </label>

        <input
          type="text"
          id="cardName"
          className="border h-6 outline-none  rounded-sm"
          required
        />
      </div>

      <div className="grid grid-rows-2 ">
        <label htmlFor="cardName " className="pt-3">
          Card number
        </label>

        <input
          type="number"
          id="cardName"
          className="border h-6 outline-none rounded-sm "
          required
        />
      </div>

      <div className="grid grid-cols-2 space-x-4">
        <div className="grid grid-rows-2 ">
          <label htmlFor="cardName" className="pt-3">
            Valid through
          </label>
          <input
            type="text"
            id="cardName"
            className="border h-6 outline-none rounded-sm "
            required
          />
        </div>
        <div className="grid grid-rows-2 ">
          <label htmlFor="cardName" className="pt-3">
            Cvc code
          </label>
          <div className="flex">
            <input
              type="number"
              id="cardName"
              className="border h-6 outline-none  rounded-sm basis-full"
              required
            />
          </div>
        </div>
      </div>
      <Button style="w-full bg-[#52c5b2]">Purchase 3.700 SEK</Button>
    </form>
  );
};

export default Form;
