export default function Filters({ category, setCategory, sort, setSort }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md flex items-center justify-between">
      
      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
      >
        <option value="all">All Products</option>
        <option value="mobile">Mobiles</option>
        <option value="laptop">Laptops</option>
        <option value="headphones">Headphones</option>
      </select>

      {/* Sort Filter */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
      >
        <option value="default">Sort: Default</option>
        <option value="low-high">Price: Low → High</option>
        <option value="high-low">Price: High → Low</option>
        <option value="rating">Rating</option>
      </select>

    </div>
  );
}
