import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";
import prisma from "@/libs/prisma";

export default async function Home() {
  const products = await prisma.products.findMany();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-20 mx-8">
        <h1 className="text-xl font-bold mb-4">LYTGADGET.ID READY STOCK</h1>
        <Searchbar />
        <div className="py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              name={product.name}
              price={product.price}
              status={product.status}
              spec={product.ram}
              link={product.link}
              image={product.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
