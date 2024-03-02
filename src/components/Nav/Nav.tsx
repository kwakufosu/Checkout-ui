import NavItem from "./NavItem";

const breadrumbItems = [
  { idx: 1, name: "Back To Shop" },
  { idx: 2, name: "Shopping Bag" },
  { idx: 3, name: "Checkout" },
  { idx: 4, name: "Confirmation" },
];

const Nav = () => {
  return (
    <nav>
      <ul className=" flex justify-center items-center ml-7">
        {breadrumbItems.map((item) => (
          <NavItem name={item.name} idx={item.idx} key={item.idx} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
