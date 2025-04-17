import Link from "next/link";
import Navbar from "../../Components/Navbar";
export default function Register() {
  return (
    <>
      <Navbar />
      <div className="relative isolate px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Create an Account
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl">
            Join Yumly to start saving your favorite recipes and explore new
            ones!
          </p>
          <form className="mt-10 max-w-md mx-auto">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 text-lg rounded-md border-2 border-gray-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 text-lg rounded-md border-2 border-gray-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 text-lg rounded-md border-2 border-gray-300"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-indigo-600 px-4 py-2 text-lg font-semibold text-white rounded-md hover:bg-indigo-500"
              >
                Register
              </button>
            </div>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl">
              Already have an account?{" "}
              <Link href="/Login" className="text-indigo-200">
                Log in here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
