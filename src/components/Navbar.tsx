import { Button } from "./ui/button";

const Navbar = () => {
  const navItems = [
    {
      label: "Home",
    },
    {
      label: "Explore",
    },
    {
      label: "About",
    },
    {
      label: "Contact",
    },
  ];

  return (
    <nav className="grid grid-cols-12 items-center">
      <div className="col-span-2">
        <img
          src="https://i.ytimg.com/vi/1ep16FrMfnc/mqdefault.jpg"
          alt="logo-img"
          className="w-40 h-20"
        />
      </div>

      <div className="col-span-9 items-center justify-center flex">
        <ul className="flex gap-16">
          {navItems.map((item) => (
            <li key={item.label}>{item.label}</li>
          ))}
        </ul>
      </div>

      <div className="col-span-1">
        <Button>Signin</Button>
      </div>
    </nav>
  );
};

export default Navbar;
