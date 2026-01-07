import CategoriesSection from "./components/home/Categories";
import HeroSection from "./components/home/Hero";
import ProductSection from "./components/home/Products";
import FooterSection from "./components/layouts/Footer";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ProductSection />
      <FooterSection />
    </main>
  );
}
