import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-bold flex items-center cursor-pointer">
            <span className="text-yellow-400">Shop</span>
            <span className="text-white">Write</span>
          </div>
        </Link>

        <div className="flex flex-grow mx-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full p-2 rounded-l-md text-gray-600 border-none focus:outline-none"
          />
          <button className="bg-yellow-500 p-2 rounded-r-md text-white hover:bg-yellow-600">
            <FaSearch />
          </button>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link href="/orders">
            <div className="hover:text-yellow-400 font-bold cursor-pointer">
              Orders
            </div>
          </Link>
          <Link href="/">
            <div className="hover:text-yellow-400 font-bold  cursor-pointer">
              Hello User!
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="pl-3 hover:text-yellow-400 ">
            <div className="text-xs xl:text-sm cursor-pointer">Returns</div>
            <div className="  text-sm xl:text-base font-bold cursor-pointer">
              & Orders
            </div>
          </div>
          <Link href="/cart">
            <div className="flex flex-row hover:text-yellow-400">
              <div className="">
                <div className="flex flex-col  ">
                  <div className="ml-4 text-sm font-bold text-orange-400">
                    {cartCount}
                  </div>
                  <div className=" mx-2 mb-2">
                    <FaShoppingCart className="text-xl" />
                  </div>
                </div>
              </div>

              <div className=" mt-5 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
