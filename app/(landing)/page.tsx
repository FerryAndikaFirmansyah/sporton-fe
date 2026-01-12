import CategoriesSection from "./components/home/Categories";
import HeroSection from "./components/home/Hero";
import ProductSection from "./components/home/Products";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ProductSection />
    </main>
  );
}
