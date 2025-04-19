import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-30 backdrop-blur-lg shadow-lg p-4 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Yumly</div>
          <div className="space-x-6">
            <Link
              href="/"
              className="text-gray-900 hover:text-indigo-600 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/SearchPage"
              className="text-gray-900 hover:text-indigo-600 transition duration-300 ease-in-out"
            >
              Search
            </Link>
            <Link
              href="#"
              className="text-gray-900 hover:text-indigo-600 transition duration-300 ease-in-out"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-gray-900 hover:text-indigo-600 transition duration-300 ease-in-out"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
