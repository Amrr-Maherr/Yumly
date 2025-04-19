"use client";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RecipeDetails from "../../../Components/RecipeDetails";
import Loader from "../../../Components/Loader";
import Navbar from "../../../Components/Navbar";

export default function RecipePage() {
  const { id } = useParams();

  const fetchRecipe = async () => {
    const response = await axios.get(
      `https://forkify-api.herokuapp.com/api/get?rId=${id}`
    );
    return response.data.recipe;
  };

  const {
    data: recipe,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipe"],
    queryFn: fetchRecipe,
  });

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        <Loader/>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        Error loading recipe.
      </div>
    );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12 px-6">
        <RecipeDetails recipe={recipe} />
      </main>
    </>
  );
}
