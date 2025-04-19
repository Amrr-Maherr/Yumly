"use client";
import { useState } from "react";
import Navbar from "../../Components/Navbar";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import RecipeCard from "../../Components/RecipeCard";
import Loader from "../../Components/Loader";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const searchMutation = useMutation({
    mutationFn: async () => {
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/search?q=${searchQuery}`
      );
      return response.data.recipes;
    },
  });

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      searchMutation.mutate();
    }
  };

  return (
    <>
      <Navbar />
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
      <section className="flex flex-col items-center justify-center text-center mt-44 mb-16 px-6">
        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Find Your Next Favorite{" "}
          <span className="text-violet-600">Recipe</span> 🍽️
        </h1>
        <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
          Search thousands of recipes tailored to your taste.
        </p>

        <div className="my-5 w-full max-w-md flex items-center">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search for pasta, salad, chicken..."
            className="w-full px-5 py-3 text-lg rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleSearchClick}
            className="ml-4 bg-indigo-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-indigo-500"
          >
            Search
          </button>
        </div>
      </section>
      <section className="w-full mx-auto">
        {searchMutation.isPending && (
          <Loader/>
        )}
        {searchMutation.isError && (
          <p className="text-center text-red-500 text-lg">
            Something went wrong!
          </p>
        )}
        {searchMutation.isSuccess && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 gap-6">
            {searchMutation.data.map((recipe) => (
              <RecipeCard key={recipe.recipe_id} recipe={recipe} />
            ))}
          </div>
        )}
      </section>
      {/* <Footer/> */}
    </>
  );
}
