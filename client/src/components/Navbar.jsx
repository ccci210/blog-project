import { useEffect, useState } from "react";
import classnames from "classnames";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      console.log(token);
    };
    fetchToken();
  }, [getToken]);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4">
        <Image
          src="logo.png"
          className="w-8 h-8"
          alt="Logo"
          width={32}
          height={32}
        />
        <span className="text-2xl font-bold">My Blog</span>
      </Link>
      {/* Mobile menu */}
      <div className="md:hidden">
        <button
          className="cursor-pointer text-2xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "="}
        </button>
        {/* Mobile menu items */}
        <div
          className={classnames(
            "w-full h-screen absolute z-10 flex flex-col items-center justify-center gap-4 transition-all ease-in-out transform",
            open ? "-right-0" : "-right-[100%]"
          )}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most popular</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="px-2 text-white font-medium rounded-3xl bg-sky-500/75 transition duration-200">
              Login
            </button>
          </Link>
        </div>
      </div>
      {/* Desktop menu  */}
      <div className="hidden md:flex item-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending </Link>
        <Link to="/">Most popular </Link>
        <Link to="/">About </Link>
        <SignedOut>
          <Link to="/login">
            <button className="px-2 text-white rounded-3xl bg-sky-500/75 transition duration-200">
              Login
            </button>
          </Link>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
