import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "@/context/ShopContext";
import { signOut, useSession } from "next-auth/react";

export const Navbar: FC = () => {
  const { itemAmount, total } = useContext(ShopContext);
  const { data: sessionData } = useSession();

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 90 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  console.log("session data", sessionData);

  return (
    <div
      className={`${
        isActive ? "bg-white shadow-md" : "bg-secondary"
      } fixed z-10 w-full transition-all duration-300`}
    >
      <div className="container navbar mx-auto">
        <div className="flex-1">
          <Link
            className="btn-ghost btn text-xl normal-case text-neutral"
            href={`/`}
          >
            wShop
          </Link>
        </div>
        <div className="items-centerized flex-none gap-x-3">
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle btn">
              <div className="indicator">
                <HiOutlineShoppingCart className="text-2xl" />
                <span className="badge-error badge badge-sm indicator-item">
                  {itemAmount}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{itemAmount} Items</span>
                <span className="text-info">Subtotal: ${total}</span>
                <div className="card-actions">
                  <button className="btn-primary btn-block btn">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {sessionData ? (
            <div className="dropdown-end dropdown">
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <FaUserCircle className="text-2xl" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={() => signOut()}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link href={`/login`}>
              <button className="btn-primary btn-sm btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
