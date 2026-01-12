import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import Button from "../ui/Button";

const productList = [
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imgUrl: "shoes-v1.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    imgUrl: "racket.png",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    imgUrl: "sportshirt.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: 458000,
    imgUrl: "football-shoes.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: 458000,
    imgUrl: "football-shoes.png",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    imgUrl: "sportshirt2.png",
  },
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imgUrl: "shoes-v2.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    imgUrl: "racket-v2.png",
  },
];

const ProductSection = () => {
  return (
    <section id="product-section" className="mx-auto mt-32 px-6 xl:px-10">
      <h2 className="font-bold italic text-4xl mb-11 text-center">
        <span className="text-primary">Our</span>Products
      </h2>
      <div className="grid grid-cols-4 gap-8">
        {productList.map((product, index) => (
          <Link
            href="#"
            key={index}
            className="p-3 bg-white hover:drop-shadow-xl duration-300 rounded-md"
          >
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative rounded-md">
              <Image
                src={`/images/products/${product.imgUrl}`}
                alt={product.name}
                width={300}
                height={300}
                className="object-contain w-[300px] h-[300px]"
              />
              <Button className="!p-2 absolute right-3 top-3 ">
                <FiPlus size={24} />
              </Button>
            </div>
            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between mb-8">
              <div className="text-gray-500">{product.category}</div>
              <div className="font-medium text-primary">
                {priceFormatter(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
