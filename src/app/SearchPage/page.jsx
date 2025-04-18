import Navbar from "../../Components/Navbar";

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <div className="relative isolate px-6 lg:px-8 min-h-screen flex items-center justify-center">
        {/* الخلفية نفس الهيرو */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* المحتوى */}
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Find Your Next Favorite{" "}
            <span className="text-violet-600">Recipe</span> 🍽️
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl">
            Search thousands of recipes tailored to your taste.
          </p>

          <div className="mt-10">
            <input
              type="text"
              placeholder="Search for pasta, salad, chicken..."
              className="w-full max-w-md px-5 py-3 text-lg rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-indigo-500">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
