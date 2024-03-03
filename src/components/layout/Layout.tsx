import Header from "../Header/Header";
import Main from "../Main/Main";

const Layout = () => {
  return (
    <div className="container mx-auto grid h-screen grid-rows-[auto_1fr]  ">
      <Header />

      <Main />
    </div>
  );
};

export default Layout;
