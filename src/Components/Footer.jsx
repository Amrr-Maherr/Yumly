export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#ff80b5] to-[#9089fc] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Yumly - Delicious Recipes</h2>
          <p className="mt-4 text-lg">
            Discover new flavors, simple recipes, and cooking tips to make every
            meal special.
          </p>
          <div className="mt-6 flex justify-center gap-x-6">
            <a
              href="#"
              className="text-lg font-semibold text-white hover:text-indigo-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-white hover:text-indigo-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-white hover:text-indigo-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
