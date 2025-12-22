import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* 🔹 Logo */}
        <Link href="/" className="">
          <img src="/logo.png" alt="" className="h-15 w-40"/>
        </Link>

        {/* 🔹 Menu */}
        <ul className="flex gap-6 items-center">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          <li>
            <Link href="/" className="hover:text-blue-600">
              Services
            </Link>
          </li>

          <li>
            <Link href="/my-bookings" className="hover:text-blue-600">
              My Bookings
            </Link>
          </li>

          {/* 🔹 Auth Buttons */}
          <li>
            <Link
              href="/login"
              className="border px-4 py-1 rounded hover:bg-blue-600 hover:text-white"
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              href="/register"
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
