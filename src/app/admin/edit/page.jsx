"use client";
import CardEdit from "@/components/CardEdit";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Searchbar from "@/components/Searchbar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EditStock() {
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
      <div className="flex flex-col h-screen justify-between">
        <div className="flex flex-col items-center justify-center pt-20 mx-8">
          <h1 className="text-xl font-bold mb-2">LYT GADGET EDIT STOCK</h1>
          <Link href="/admin" className="link link-primary mb-4">
            Back to admin panel
          </Link>
          <Searchbar onChangeCallback={filterItems} />

          <div className="py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8">
            {searchItem === "" ? (
              products &&
              products.map((product) => (
                <CardEdit key={product.id} data={product} />
              ))
            ) : filtered.length === 0 ? (
              <div>No Result Found</div>
            ) : (
              filtered.map((product) => (
                <CardEdit key={product.id} data={product} />
              ))
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
