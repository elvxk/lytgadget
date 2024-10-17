"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const [searchItem, setSearchItem] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("/api/products", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterItems = (searchTerm) => {
    const filteredItems = products.filter((prod) =>
      prod.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchItem(filteredItems);
    setFiltered(filteredItems);
  };

  return (
    <>
      {isLoading ? <Loading /> : null}
      <Navbar />
      <div className="flex flex-col h-screen justify-between">
        <div className="flex flex-col items-center justify-center pt-20 mx-8">
          <h1 className="text-xl font-bold mb-4">LYTGADGET.ID READY STOCK</h1>
          <Searchbar onChangeCallback={filterItems} />

          <div className="py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8">
            {searchItem === "" ? (
              products &&
              products.map((product) => (
                <Card
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  status={product.status}
                  spec={product.ram}
                  link={product.link}
                  image={product.image}
                />
              ))
            ) : filtered.length === 0 ? (
              <div>No Result Found</div>
            ) : (
              filtered.map((product) => (
                <Card
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  status={product.status}
                  spec={product.ram}
                  link={product.link}
                  image={product.image}
                />
              ))
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
