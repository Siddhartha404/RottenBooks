// src/pages/HomePage.tsx

import { useEffect, useState } from "react";

const HomePage: React.FC = () => {
  type Book = {
    cover_i?: number;
    author_name?: string[];
    title?: string;
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch book data
  useEffect(() => {
    setLoading(true);
    const query = searchTerm.trim() === "" ? "popular" : searchTerm;
    fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.docs.slice(0, 10));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [searchTerm]);

  return (
    <div className="p-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a book..."
        className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {loading && <p className="mt-4">Loading...</p>}
      {!loading && books.length === 0 && (
        <p className="mt-4">No results found.</p>
      )}

      <ul className="space-y-4 mt-4">
        {books.map((book, index) => {
          const coverUrl = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "https://via.placeholder.com/128x193?text=No+Cover";

          return (
            <li
              key={index}
              className="flex items-start space-x-4 border p-4 rounded shadow-sm"
            >
              <img
                src={coverUrl}
                alt={book.title || "No title"}
                className="w-24 h-auto object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-semibold">{book.title}</h2>
                <p className="text-gray-600">
                  {book.author_name?.join(", ") || "Unknown author"}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
