"use client"
import Image from "next/image";
import Link from "next/link";
import bookshop from "@/public/assets/images/book-shop-icon-library-store-or-bookstore-symbol-vector-removebg-preview.png";
import { signOut } from "next-auth/react";

const NavBar = () => {
  return (
    <nav className=" top-0 w-full h-28  sticky">
      <ul className="flex justify-between px-20 shadow-md bg-white   items-center h-20  gap-4 list-none text-lg ">
        <li>
          {/* logo  */}
          <Link href="/">
            <Image src={bookshop} alt="Logo" className="w-32 h-24" />
          </Link>
        </li>
        <li>
          <button
            onClick={() =>
              signOut({
                callbackUrl: "/login", // redirect here after logout
              })
            }
          >
            Logout
          </button>
          <Link className="text-amber-800  pr-6" href="/sign-in">
            Sign In
          </Link>
          <Link
            className="text-white py-2 px-4 bg-amber-800 border hover:bg-white hover:border hover:rounded-lg transition-all hover:text-amber-800 hover:border-amber-800 "
            href="/start-reading"
          >
            Start Reading
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
