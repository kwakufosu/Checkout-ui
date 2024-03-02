interface Props {
  name: string;
  idx: Number;
}
const NavItem = ({ name, idx }: Props) => {
  return (
    <li
      className={`text-slate-500 text-[4px] ${idx === 3 ? ` font-semibold` : `text-gray-300`}`}
    >
      {idx === 4
        ? `${name} `
        : `${name} \u00A0\u00A0\u00A0    > \u00A0\u00A0\u00A0   `}
    </li>
  );
};

export default NavItem;
