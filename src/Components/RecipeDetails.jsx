export default function RecipeDetails({ recipe }) {
  return (
    <section className="max-w-6xl mx-auto my-8 lg:my-12 px-4">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden md:flex">
        <div className="md:w-1/3 lg:w-2/5 md:flex-shrink-0 relative">
          <div className="relative w-full h-64 md:h-full min-h-[350px]">
            <img
              src={recipe.image_url}
              alt={recipe.title}
              layout="fill"
              className="rounded-t-xl md:rounded-l-xl md:rounded-t-none h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center md:w-2/3 lg:w-3/5">
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-wide mb-1">
            <a
              href={recipe.publisher_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-800"
            >
              {recipe.publisher}
            </a>
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {recipe.title}
          </h1>

          <div className="flex flex-wrap items-center text-xs text-gray-500 gap-x-4 gap-y-1 mb-6">
            <a
              href={recipe.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 hover:text-violet-800 underline"
            >
              Original Source
            </a>
            <span>|</span>
            <span>ID: {recipe.recipe_id}</span>
            <span>|</span>
            <span>Rank: {recipe.social_rank}</span>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Ingredients
            </h2>
            {
            recipe.ingredients.length > 0 ? (
              <ul className="list-none space-y-2 text-gray-700 text-sm">
                {recipe.ingredients.map((ingredient, index) => (
                  <li
                    key={`${recipe.recipe_id}-alt-ingredient-${index}`}
                    className="flex items-start"
                  >
                    <svg
                      className="w-4 h-4 mr-2 mt-1 text-violet-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic text-sm">
                No ingredients listed.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
