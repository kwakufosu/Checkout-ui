interface Props {
  name: string;
  price: number;
}

const CostItem = ({ name, price }: Props) => {
  return (
    <li className="flex justify-between py-1">
      <div>{name}</div>
      <div>{price}SEK</div>
    </li>
  );
};

export default CostItem;
