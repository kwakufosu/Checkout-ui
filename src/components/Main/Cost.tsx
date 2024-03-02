import Button from "../ui/Button";
import CostItem from "./CostItem";

const Cost = () => {
  return (
    <>
      <ul className="font-semibold  text-[4.5px] border-b">
        <CostItem name="Subtotal" price={537} key={1} />
        <CostItem name="Shipping" price={0} key={2} />
        <CostItem name="Total" price={537} key={3} />
      </ul>
      <div className="flex justify-center">
        <Button style="text-[#52c5b2]  border border-[#52c5b2]">
          ADD GIFT CODE
        </Button>
      </div>
    </>
  );
};

export default Cost;
