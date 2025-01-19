import HeaderSection from "@/app/_components/sections/HeaderSection";
import WhyUs from "../sections/WhyUs";
import Products from "../sections/Products";
import Industries from "../sections/Industries";

function HomePage() {
  return (
    <main className="">
      <HeaderSection />
      <WhyUs />
      <Products />
      <Industries />
    </main>
  );
}

export default HomePage;
