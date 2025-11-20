import { useState } from "react";
import productsData from "./data/products";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductsGrid from "./components/ProductsGrid";
import Footer from "./components/Footer";

export default function App() {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  // Filter by category
  let filtered = productsData.filter(item =>
    category === "all" ? true : item.category === category
  );

  // Sorting logic
  if (sort === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  }
  if (sort === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }
  if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition">
      <Header />

      <div className="max-w-5xl mx-auto px-4 mt-8">
        <Filters
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />

        <ProductsGrid products={filtered} />
      </div>

      <Footer />
    </div>
  );
}
