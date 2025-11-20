import { motion } from "framer-motion";

export default function ProductCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition cursor-pointer"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full rounded-lg mb-3"
      />

      <h3 className="font-bold text-lg dark:text-white">{item.title}</h3>
      
      <p className="text-gray-500 dark:text-gray-300">
        Category: {item.category}
      </p>

      <p className="text-yellow-500">⭐ {item.rating}</p>

      <p className="text-2xl font-bold mt-2 dark:text-white">${item.price}</p>
    </motion.div>
  );
}
