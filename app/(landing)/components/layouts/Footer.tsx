import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="bg-dark-alternate text-white mt-52">
      <div className="container mx-auto px-6 xl:px-10 py-20 flex justify-between">
        <div className="max-w-sm">
          <Image
            src="/images/logo-footer.svg"
            alt="logo-footer"
            width={187}
            height={44}
          />
          <p className="mt-8 text-white/70 leading-relaxed">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div className="flex gap-7 flex-col">
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Products</Link>
            <Link href="#">About</Link>
          </div>
          <div className="flex gap-7 flex-col">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">TikTok</Link>
            <Link href="#">Youtube</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container mx-auto px-6 xl:px-10 py-6 flex justify-between items-center text-sm text-white/70">
          SportsOn © 2025 All Rights Reserverd.
          <div className="flex gap-8">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
