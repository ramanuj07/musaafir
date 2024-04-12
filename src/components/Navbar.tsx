import { Button } from "./ui/button";
import logo from './logo.png';
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
      <div className="flex col-span-2">
      <div>
        <img
          src={logo}
          alt="logo-img"
          className="w-20 h-20"
        />
        
      </div >
      <div className="text-xl pt-4">
      Musaafir
      </div>
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
