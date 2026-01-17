import { getAllCategories } from "../services/category.service";
import { getAllProducts } from "../services/product.service";
import CategoriesSection from "./components/home/Categories";
import HeroSection from "./components/home/Hero";
import ProductsSection from "./components/home/Products";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts(),
  ]);

  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductsSection products={products} />
    </main>
  );
}
