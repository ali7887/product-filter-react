import ProductCard from "./ProductCard";

export default function ProductsGrid({ products }) {
  return (
    <div className="grid md:grid-cols-3 mt-6 gap-6">
      {products.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
