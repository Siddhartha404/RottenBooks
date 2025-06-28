import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bookGenres = [
    "Fiction",
    "Fantasy",
    "Sci-Fi",
    "Mystery",
    "Romance",
    "History",
    "Biography",
  ];
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-center items-center">
      <h1 className="text-2xl font-bold tracking-wide text-yellow-400 ">
        📚 RottenBooks
      </h1>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 m-2 text-white bg-black rounded hover:bg-gray-700"
        >
          <Menu size={24} />
        </button>
      )}
      {isOpen && (
        <nav className="w-48 bg-cyan-500 text-black font-bold p-4 space-y-4 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-black hover:text-red-500"
          >
            ✕
          </button>
          <div>Home</div>
          <div>Books</div>
          <div>Authors</div>
          <div className="relative">
            Genre
            <div className="mt-2 pl-2 text-sm font-normal space-y-1">
              {bookGenres.map((genre, i) => (
                <div key={i} className="hover:text-yellow-500 cursor-pointer">
                  {genre}
                </div>
              ))}
            </div>
          </div>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;
