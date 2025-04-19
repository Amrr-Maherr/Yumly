// Components/RecipeCard.jsx
import Link from "next/link";
import React from "react";

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:scale-105 duration-300">
      <Link href={`/recipe/${recipe.recipe_id}`}>
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link href={`/recipe/${recipe.recipe_id}`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:underline">
            {recipe.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-4">By {recipe.publisher}</p>
        <a
          href={recipe.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-violet-600 font-medium hover:underline"
        >
          View Original →
        </a>
      </div>
    </div>
  );
}
